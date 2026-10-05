import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#f5f8fc]">
      <Sidebar />

      <main className="ml-56 min-h-screen">
        {children}
      </main>
    </div>
  );
}