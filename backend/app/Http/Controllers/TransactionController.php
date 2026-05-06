<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
{
    public function index()
    {
        return response()->json(Transaction::with('user.role')->orderBy('created_at', 'desc')->get());
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer|exists:users,id',
            'amount' => 'required|numeric|min:0.01',
            'type' => 'required|string|in:credit,debit',
            'note' => 'nullable|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $transaction = Transaction::create($request->only(['user_id', 'amount', 'type', 'note']));

        return response()->json($transaction->load('user.role'), 201);
    }

    public function show(Transaction $transaction)
    {
        return response()->json($transaction->load('user.role'));
    }

    public function update(Request $request, Transaction $transaction)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'sometimes|required|integer|exists:users,id',
            'amount' => 'sometimes|required|numeric|min:0.01',
            'type' => 'sometimes|required|string|in:credit,debit',
            'note' => 'nullable|string|max:500',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $transaction->update($request->only(['user_id', 'amount', 'type', 'note']));

        return response()->json($transaction->load('user.role'));
    }

    public function destroy(Transaction $transaction)
    {
        $transaction->delete();

        return response()->json(['message' => 'Transaction removed successfully.']);
    }
}
