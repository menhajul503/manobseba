import { useState } from 'react';
import { CheckCircle2, Search, UserPlus } from 'lucide-react';
import { members } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';

export default function MemberManagement() {
  const [search, setSearch] = useState('');

  const filteredMembers = members.filter((member) => member.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Member Management</p>
            <h2 className="text-2xl font-semibold text-slate-900">Add and track village members</h2>
          </div>
          <button className="inline-flex items-center gap-2 rounded-3xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#276d64]">
            <UserPlus className="h-4 w-4" /> New member
          </button>
        </div>

        <form className="grid gap-4 lg:grid-cols-2">
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Member name" />
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Phone number" />
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Email address" />
          <input className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Village / address" />
          <select className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900">
            <option>Member type</option>
            <option>Donor</option>
            <option>Volunteer</option>
            <option>Beneficiary</option>
          </select>
          <button className="rounded-3xl bg-secondary px-5 py-4 font-semibold text-white">Save member</button>
        </form>
      </section>

      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 rounded-3xl bg-slate-50 px-4 py-3 shadow-sm">
            <Search className="h-4 w-4 text-slate-400" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search members" className="bg-transparent text-sm text-slate-700 focus:outline-none" />
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Active', 'Pending', 'Inactive'].map((label) => (
              <button key={label} className="rounded-3xl border border-slate-200 px-4 py-2 text-sm text-slate-600">{label}</button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 font-medium text-slate-500">Name</th>
                <th className="px-6 py-4 font-medium text-slate-500">Contact</th>
                <th className="px-6 py-4 font-medium text-slate-500">Joined</th>
                <th className="px-6 py-4 font-medium text-slate-500">Contribution</th>
                <th className="px-6 py-4 font-medium text-slate-500">Status</th>
                <th className="px-6 py-4 font-medium text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filteredMembers.map((member) => (
                <tr key={member.id}>
                  <td className="px-6 py-4 font-semibold text-slate-900">{member.name}</td>
                  <td className="px-6 py-4 text-slate-600">{member.contact}</td>
                  <td className="px-6 py-4 text-slate-600">{member.joined}</td>
                  <td className="px-6 py-4 text-slate-900">{member.contribution}</td>
                  <td className="px-6 py-4"><StatusBadge status={member.status === 'Active' ? 'Paid' : member.status} /></td>
                  <td className="px-6 py-4">
                    <button className="rounded-3xl bg-[#EEF9F5] px-4 py-2 text-sm font-semibold text-primary">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="inline-flex items-center gap-3 rounded-3xl bg-[#F0FBF7] px-5 py-4 text-sm text-slate-700">
          <CheckCircle2 className="h-5 w-5 text-primary" /> Safe, simple workflows for administrators.
        </div>
      </section>
    </div>
  );
}
