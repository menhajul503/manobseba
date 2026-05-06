import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register as registerApi } from '../api/auth';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', password_confirmation: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const data = await registerApi(form);
      localStorage.setItem('ms_token', data.token);
      localStorage.setItem('ms_user', JSON.stringify(data.user));
      navigate('/dashboard');
    } catch (err: any) {
      const response = err.response?.data;
      const validationErrors = response?.errors ? Object.values(response.errors).flat().join(' ') : null;
      setError(validationErrors || response?.message || 'Registration failed.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#F8FEF9] via-white to-[#EEF9F5] px-4 py-12">
      <div className="w-full max-w-xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_30px_80px_rgba(47,143,126,0.16)]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Create your ManobSheba account</h1>
          <p className="mt-2 text-sm text-slate-500">Register as a member, sub admin, or super admin.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="name">Name</label>
            <input
              id="name"
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="Your full name"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder="name@example.com"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
              placeholder="Enter a strong password"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="password_confirmation">Confirm Password</label>
            <input
              id="password_confirmation"
              type="password"
              value={form.password_confirmation}
              onChange={(event) => setForm({ ...form, password_confirmation: event.target.value })}
              placeholder="Repeat your password"
              className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {error && <p className="rounded-3xl bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-3xl bg-primary py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#266c5f] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? 'Creating account…' : 'Create account'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already registered? <Link to="/login" className="font-semibold text-primary">Login now</Link>
        </p>
      </div>
    </div>
  );
}
