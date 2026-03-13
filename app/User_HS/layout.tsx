import ThanhDieuHuong from "../components/ThanhDieuHuong";
import PhanDau from "../components/PhanDau";
import NoiDung from "../components/NoiDung";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-2 border-black grid grid-cols-[260px_1fr] grid-rows-[64px_1fr] bg-gray-200 h-full w-full">
      <ThanhDieuHuong className="row-span-2 bg-[#FFFFFF] w-64   flex flex-col h-full" />
      <PhanDau className="bg-[#F6F7F8] shadow-sm text-black border-2 border-black" />
      <NoiDung className="bg-white text-black ">{children}</NoiDung>
    </div>
  );
}
