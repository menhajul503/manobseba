import { useState } from 'react';
import { Bell, Send } from 'lucide-react';
import { notices } from '../data/mockData';

export default function NoticesPage() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Notices</p>
            <h2 className="text-2xl font-semibold text-slate-900">Publish community updates</h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-3xl bg-[#EEF9F5] px-4 py-2 text-sm font-semibold text-primary">
            <Bell className="h-4 w-4" /> Admin only
          </div>
        </div>

        <form className="grid gap-4 lg:grid-cols-2">
          <input value={title} onChange={(event) => setTitle(event.target.value)} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Notice title" />
          <select className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900">
            <option>Target audience</option>
            <option>All members</option>
            <option>Donors</option>
            <option>Volunteers</option>
          </select>
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={4} className="col-span-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900" placeholder="Message" />
          <button className="rounded-3xl bg-primary px-5 py-4 text-sm font-semibold text-white">Publish notice</button>
        </form>
      </section>

      <section className="rounded-[32px] bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">All notices</p>
            <h2 className="text-2xl font-semibold text-slate-900">Latest messages</h2>
          </div>
          <button className="rounded-3xl bg-[#EEF9F5] px-4 py-3 text-sm font-semibold text-primary">Filter</button>
        </div>

        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-slate-900">{notice.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{notice.excerpt}</p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{notice.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-[#EAF7F4] p-6 shadow-sm">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <Send className="h-5 w-5 text-primary" /> Keep your notices visible and simple for rural families.
        </div>
      </section>
    </div>
  );
}
