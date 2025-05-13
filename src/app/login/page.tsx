'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // Giả lập gọi API
      if (username === 'admin' && password === '123456') {
        // Ví dụ: lưu token, set cookie, v.v.
        localStorage.setItem('token', 'fake-token');
        // Điều hướng sang dashboard
        router.push('/dashboard');
      } else {
        setError('Invalid credentials');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
         style={{ backgroundImage: "url('/images/bg-login.png')" }}>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Left panel */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white border border-white/20 flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-snug font-mono">
            Welcome to <br />
            Technology <br />
            Healthcare
          </h1>
        </div>

        {/* Right panel (form) */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center">
          <h2 className="text-center text-xl font-semibold mb-6">Welcome to ...</h2>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-6">
            <button className="px-6 py-2 rounded-full bg-cyan-300 text-white font-semibold shadow">
              Login
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-semibold shadow">
              Register
            </button>
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="text-gray-600 block mb-1">User name</label>
            <input
              type="text"
              placeholder="Enter your User name"
              className="w-full px-4 py-2 border border-cyan-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="text-gray-600 block mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border border-cyan-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute top-9 right-4 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Options */}
          <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-cyan-400" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">Forgot Password?</a>
          </div>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          {/* Submit */}
          <div className="flex align-right justify-center">
            <button
              onClick={handleLogin}
              className="px-10 py-2 w-1/2 rounded-full bg-cyan-400 text-white font-semibold hover:bg-cyan-500 transition"
            >
              Login
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-700">
            Don't have an account? <a href="#" className="text-cyan-500 font-medium hover:underline">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
