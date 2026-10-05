"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ReceiptText,
  Package,
  Calculator,
  History,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Transaksi",
    href: "/transaksi",
    icon: ReceiptText,
  },
  {
    name: "Produk",
    href: "/produk",
    icon: Package,
  },
  {
    name: "Kasir",
    href: "/kasir",
    icon: Calculator,
  },
  {
    name: "Riwayat",
    href: "/riwayat",
    icon: History,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex w-56 flex-col bg-[#101b30] text-white">
      {/* Logo */}
      <div className="flex h-24 items-center justify-center">
        <img src="/logo.jpeg" alt="Logo" className="w-18 h-18 object-contain"/>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-1.5 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon
                size={19}
                strokeWidth={1.8}
                className="shrink-0"
              />

              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}