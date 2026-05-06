import { useEffect, useState } from 'react';
import { getTransactions } from '../api/transactions';
import StatusBadge from '../components/StatusBadge';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTransactions()
      .then((data) => setTransactions(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Transactions</h2>
        <p className="mt-2 text-sm text-slate-600">Review all credit and debit entries logged by the organization.</p>
      </div>

      <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-700">Member</th>
              <th className="px-6 py-4 font-semibold text-slate-700">Amount</th>
              <th className="px-6 py-4 font-semibold text-slate-700">Type</th>
              <th className="px-6 py-4 font-semibold text-slate-700">Note</th>
              <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-slate-500">Loading transactions…</td>
              </tr>
            ) : transactions.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-slate-500">No transactions found.</td>
              </tr>
            ) : (
              transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 text-slate-900">{transaction.user?.name || 'Unknown'}</td>
                  <td className="px-6 py-4 text-slate-900">৳ {Number(transaction.amount).toFixed(2)}</td>
                  <td className="px-6 py-4 text-slate-900 uppercase">{transaction.type}</td>
                  <td className="px-6 py-4 text-slate-600">{transaction.note || '-'}</td>
                  <td className="px-6 py-4">
                    <StatusBadge status={transaction.type === 'credit' ? 'Success' : 'Pending'} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
