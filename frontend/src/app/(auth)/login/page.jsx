'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // Simulasi loading
    setTimeout(() => {
      router.push('/dashboard');
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FDFBF7] p-4 relative overflow-hidden">
      {/* Decorative Background Elements menggunakan warna turunan logo Harafina */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#E6B566]/15 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8C5830]/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Card Container dengan gaya clean & warm */}
        <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-[#8C5830]/15 p-8 shadow-xl shadow-[#4A2E1B]/5">
          
          {/* Header */}
          <div className="mb-8 text-center flex flex-col items-center">
            <div className="mb-4 h-16 w-16 flex items-center justify-center rounded-2xl bg-[#FDFBF7] shadow-sm border border-[#8C5830]/20 transform hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Logo Harafina"
                width={56}
                height={56}
                className="h-full w-full object-contain p-1"
                priority
              />
            </div>
            <h2 className="text-2xl font-bold text-[#4A2E1B]">Selamat Datang</h2>
            <p className="text-sm text-[#8C5830] mt-1">Masuk untuk melanjutkan ke Harafina POS</p>
          </div>

          {/* Form Container */}
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            
            {/* Username Input */}
            <div className="group">
              <label className="block text-xs font-semibold uppercase text-[#8C5830] mb-2 group-focus-within:text-[#4A2E1B] transition-colors">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Masukkan username Anda"
                  className="w-full rounded-xl border border-[#8C5830]/20 bg-[#FDFBF7]/50 px-4 py-3 text-sm text-[#4A2E1B] placeholder:text-[#8C5830]/40 focus:border-[#4A2E1B] focus:bg-white focus:ring-2 focus:ring-[#8C5830]/10 focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Password Input with Toggle */}
            <div className="group">
              <label className="block text-xs font-semibold uppercase text-[#8C5830] mb-2 group-focus-within:text-[#4A2E1B] transition-colors">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Masukkan password Anda"
                  className="w-full rounded-xl border border-[#8C5830]/20 bg-[#FDFBF7]/50 px-4 py-3 pr-10 text-sm text-[#4A2E1B] placeholder:text-[#8C5830]/40 focus:border-[#4A2E1B] focus:bg-white focus:ring-2 focus:ring-[#8C5830]/10 focus:outline-none transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C5830]/60 hover:text-[#4A2E1B] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-[#8C5830] hover:text-[#4A2E1B] cursor-pointer transition-colors">
                <input type="checkbox" className="rounded w-4 h-4 border-[#8C5830]/30 text-[#4A2E1B] focus:ring-[#8C5830]/10 cursor-pointer" />
                Ingat saya
              </label>
              <a href="#" className="text-[#8C5830] hover:text-[#4A2E1B] font-medium transition-colors">
                Lupa password?
              </a>
            </div>

            {/* Login Button dengan warna utama Cokelat Tua Logo (#4A2E1B) dan teks putih/krem */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                style={{ backgroundColor: '#4A2E1B', color: '#FDFBF7' }}
                className="w-full rounded-xl py-3 text-sm font-bold shadow-md hover:opacity-95 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-[#FDFBF7]/30 border-t-[#FDFBF7] rounded-full animate-spin"></div>
                    Loading...
                  </span>
                ) : (
                  'Masuk'
                )}
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-[#8C5830]">
              Belum punya akun?{' '}
              <a href="#" className="text-[#4A2E1B] font-semibold hover:underline transition-colors">
                Daftar sekarang
              </a>
            </p>

          </form>

        </div>

        {/* Bottom Accent */}
        <div className="mt-8 text-center text-xs text-[#8C5830]/70">
          <p>© 2024 Harafina. Semua hak dilindungi.</p>
        </div>
      </div>
    </div>
  );
}