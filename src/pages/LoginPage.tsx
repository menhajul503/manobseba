import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Globe } from 'lucide-react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#EAF7F4] via-[#F6FBFF] to-[#EEF9F5] px-4 py-12">
      <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_30px_80px_rgba(47,143,126,0.12)]">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-[24px] bg-primary text-3xl font-semibold text-white">M</div>
          <h1 className="text-3xl font-semibold text-slate-900">Manobseba Group</h1>
          <p className="mt-2 text-sm text-slate-500">Access the village charity fund dashboard with ease.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="username">Email / Username</label>
            <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20">
              <Mail className="h-5 w-5 text-slate-400" />
              <input
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter email or username"
                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700" htmlFor="password">Password</label>
            <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20">
              <Lock className="h-5 w-5 text-slate-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
          </div>

          <button className="w-full rounded-3xl bg-primary py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#276d64]" type="submit">
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
          <button className="inline-flex items-center gap-2 rounded-3xl bg-slate-50 px-4 py-2 text-slate-600 shadow-sm"> 
            <Globe className="h-4 w-4" /> বাংলা
          </button>
          <button className="text-primary font-semibold">Forgot password?</button>
        </div>
      </div>
    </div>
  );
}
