import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[260px_1fr] grid-rows-[64px_1fr] h-screen">
      <Sidebar className="row-span-2 border-r bg-white" />
      <Header />
      <main className="bg-gray-100 p-6 overflow-auto">{children}</main>
    </div>
  );
}
