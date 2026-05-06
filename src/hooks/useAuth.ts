import { useEffect, useState } from 'react';
import { fetchCurrentUser, login as loginRequest, logout as logoutRequest, register as registerRequest } from '../api/auth';

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => {
    const raw = localStorage.getItem('ms_user');
    return raw ? JSON.parse(raw) : null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('ms_token');
    if (token && !user) {
      setLoading(true);
      fetchCurrentUser()
        .then((data) => {
          setUser(data);
          localStorage.setItem('ms_user', JSON.stringify(data));
        })
        .catch(() => {
          localStorage.removeItem('ms_token');
          localStorage.removeItem('ms_user');
          setUser(null);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginRequest({ email, password });
    localStorage.setItem('ms_token', data.token);
    localStorage.setItem('ms_user', JSON.stringify(data.user));
    setUser(data.user);
    return data;
  };

  const register = async (name: string, email: string, password: string, password_confirmation: string) => {
    const data = await registerRequest({ name, email, password, password_confirmation });
    localStorage.setItem('ms_token', data.token);
    localStorage.setItem('ms_user', JSON.stringify(data.user));
    setUser(data.user);
    return data;
  };

  const logout = async () => {
    await logoutRequest();
    localStorage.removeItem('ms_token');
    localStorage.removeItem('ms_user');
    setUser(null);
  };

  return { user, loading, login, logout, register };
}
