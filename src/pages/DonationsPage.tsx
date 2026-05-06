import { FormEvent, useEffect, useState } from 'react';
import { CreditCard, PlusCircle } from 'lucide-react';
import { createDonation, getDonations } from '../api/donations';
import StatusBadge from '../components/StatusBadge';

export default function DonationsPage() {
  const [donations, setDonations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ amount: '', date: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const currentUser = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('ms_user') || 'null') : null;

  useEffect(() => {
    getDonations()
      .then((data) => setDonations(data))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!currentUser) {
      setError('User must be logged in to create donations.');
      return;
    }

    setError('');
    setSuccess('');

    try {
      const created = await createDonation({
        user_id: currentUser.id,
        amount: Number(form.amount),
        date: form.date,
      });
      setDonations([created, ...donations]);
      setSuccess('Donation created successfully.');
      setForm({ amount: '', date: '' });
    } catch (err: any) {
      setError(err.response?.data?.message || 'Unable to add donation.');
    }
  };

  const total = donations.reduce((acc, item) => acc + Number(item.amount), 0);
  const monthTotal = donations.filter((item) => new Date(item.date).getMonth() === new Date().getMonth()).reduce((acc, item) => acc + Number(item.amount), 0);

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Donations</p>
            <h2 className="text-2xl font-semibold text-slate-900">Add donation entry</h2>
          </div>
          <button className="inline-flex items-center gap-2 rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-white">
            <PlusCircle className="h-4 w-4" /> New donation
          </button>
        </div>

        <form className="grid gap-4 lg:grid-cols-3" onSubmit={handleSubmit}>
          <input
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900"
            placeholder="Amount"
            value={form.amount}
            onChange={(event) => setForm({ ...form, amount: event.target.value })}
          />
          <input
            type="date"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900"
            value={form.date}
            onChange={(event) => setForm({ ...form, date: event.target.value })}
          />
          <button className="rounded-3xl bg-secondary px-5 py-4 font-semibold text-white">Submit gift</button>
        </form>

        {error && <p className="mt-4 rounded-3xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}
        {success && <p className="mt-4 rounded-3xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{success}</p>}
      </section>

      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-[#F0FBF7] p-5">
            <p className="text-sm text-slate-500">Total donations</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">৳ {total.toFixed(2)}</p>
          </div>
          <div className="rounded-3xl bg-[#EFF6FF] p-5">
            <p className="text-sm text-slate-500">Collected this month</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">৳ {monthTotal.toFixed(2)}</p>
          </div>
          <div className="rounded-3xl bg-[#FEF6EC] p-5">
            <p className="text-sm text-slate-500">Donation records</p>
            <p className="mt-3 text-2xl font-semibold text-slate-900">{donations.length}</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 font-medium text-slate-500">Donor</th>
                <th className="px-6 py-4 font-medium text-slate-500">Amount</th>
                <th className="px-6 py-4 font-medium text-slate-500">Date</th>
                <th className="px-6 py-4 font-medium text-slate-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-slate-500">Loading donations…</td>
                </tr>
              ) : donations.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-slate-500">No donations found.</td>
                </tr>
              ) : (
                donations.map((donation) => (
                  <tr key={donation.id}>
                    <td className="px-6 py-4 font-semibold text-slate-900">{donation.user?.name || 'Member'}</td>
                    <td className="px-6 py-4 text-slate-900">৳ {Number(donation.amount).toFixed(2)}</td>
                    <td className="px-6 py-4 text-slate-600">{donation.date}</td>
                    <td className="px-6 py-4"><StatusBadge status="Success" /></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <CreditCard className="h-5 w-5 text-secondary" /> Transactions and donations are stored securely with Laravel Sanctum authentication.
        </div>
      </section>
    </div>
  );
}
