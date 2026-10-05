'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        
        {/* Header Sederhana */}
        <div className="mb-6 text-center flex flex-col items-center">
          <div className="mb-3 h-12 w-12 flex items-center justify-center rounded-xl bg-indigo-50 p-2">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Selamat Datang</h2>
          <p className="text-sm text-gray-500 mt-1">Silakan masuk ke akun Anda</p>
        </div>

        {/* Konten Frontend (Tanpa Form) */}
        <div className="space-y-4">
          
          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Masukkan username"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => router.push('/dashboard')}
              className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition"
            >
              Masuk
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}