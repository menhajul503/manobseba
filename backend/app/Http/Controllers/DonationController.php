<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class DonationController extends Controller
{
    public function index()
    {
        return response()->json(Donation::with('user.role')->orderBy('date', 'desc')->get());
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer|exists:users,id',
            'amount' => 'required|numeric|min:1',
            'date' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $donation = Donation::create($request->only(['user_id', 'amount', 'date']));

        return response()->json($donation->load('user.role'), 201);
    }

    public function show(Donation $donation)
    {
        return response()->json($donation->load('user.role'));
    }

    public function update(Request $request, Donation $donation)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'sometimes|required|integer|exists:users,id',
            'amount' => 'sometimes|required|numeric|min:1',
            'date' => 'sometimes|required|date',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $donation->update($request->only(['user_id', 'amount', 'date']));

        return response()->json($donation->load('user.role'));
    }

    public function destroy(Donation $donation)
    {
        $donation->delete();

        return response()->json(['message' => 'Donation removed successfully.']);
    }
}
