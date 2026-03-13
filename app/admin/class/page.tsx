"use client";
import MyButton from "@/app/items_phu/button";
import { School, Book, Search, ChevronLeft, ChevronRight, ChevronDown, ListFilter } from "lucide-react";  
import { useState, useRef, useEffect } from "react";

export default function Page() {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("lopHC");
    const [selectHK, setSelectHK] = useState("Học kỳ 1");
    const options = ["Học kỳ 1", "Học kỳ 2"];
    const [openYear, setOpenYear] = useState(false);
    const generateYears = (startYear : number) => {
        const currentYear = new Date().getFullYear();
        const years = [];

        for (let i = startYear; i < currentYear; i++) {
            years.push(`${i}-${i + 1}`);
        }

        return years;
    };
    const yearOptions = generateYears(1980).reverse();
    const [selectYear, setSelectYear] = useState("2025-2026");
    const [openKhoa, setOpenKhoa] = useState(false);
    const [selectKhoa, setSelectKhoa] = useState("Công nghệ thông tin");
    const khoaOptions = ["Công nghệ thông tin", "Kinh tế", "May mặc", "Điện tử", "Cơ khí"];
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event : MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
                setOpenYear(false);
                setOpenKhoa(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const courses = [
        {
        id: "C01003",
        name: "Cấu trúc dữ liệu & Giải thuật",
        group: "L01",
        teacher: "Phan Thanh Tùng",
        teacherCode: "PT",
        day: "Thứ 2",
        time: "1-3",
        room: "H1-302",
        status: "ĐANG HỌC"
        },
        {
        id: "C02007",
        name: "Hệ điều hành",
        group: "L02",
        teacher: "Nguyễn Hoàng Tú",
        teacherCode: "NH",
        day: "Thứ 4",
        time: "7-9",
        room: "H6-405",
        status: "ĐANG HỌC"
        },
        {
        id: "MT1003",
        name: "Giải tích 1",
        group: "L15",
        teacher: "Lê Văn Sâm",
        teacherCode: "LV",
        day: "Thứ 6",
        time: "4-6",
        room: "B1-102",
        status: "ĐÃ KẾT THÚC"
        }
    ];
    return (
        <div className="m-6">   
            <div className="flex justify-between items-center">
                <div className="text-3xl font-bold">
                    {activeTab === "lopHC" ? "Lớp hành chính" : "Lớp học phần"}
                    <p className="text-sm text-gray-400">{activeTab === "lopHC" ? "Danh sách các lớp hành chính đang hoạt động" : "Quản lý và điều phối các học phần trong kỳ học"}</p>
                </div>
                <MyButton label={activeTab === "lopHC" ? "Thêm lớp hành chính" : "Thêm lớp học phần"} />
            </div> 
            <div className="border border-gray-300 rounded-lg p-4 mb-4 mt-4">
                <div className="font-bold">
                    <span onClick={() => setActiveTab("lopHC")} className={`pb-2 mr-6 ${activeTab === "lopHC"? "border-b-2 border-blue-600 text-blue-600 " : "text-gray-500"}`}>
                        <a><School className="inline-block mr-2" />
                        Lớp hành chính</a>
                    </span>
                    <span onClick={() => setActiveTab("lopHP")} className={`pb-2 ${activeTab === "lopHP"? "border-b-2 border-blue-600 text-blue-600 " : "text-gray-500"}`}>
                        <Book className="inline-block mr-2" />
                        Lớp học phần
                    </span>
                </div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4">
                {activeTab === "lopHC" && 
                    <div>
                        <div className="relative w-100%">
                            <Search className="inline-block mr-2 text-gray-400 absolute left-3 top-2.5" />
                            <input type="text" placeholder="Tìm kiếm mã lớp, tên lớp hoặc cố vấn học tập..." className="border border-gray-300 rounded-lg p-2 w-full mb-4 pl-11" />
                        </div>
                        <table className="w-full border-separate border-spacing-y-3 table-auto">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="pl-4 py-2">Mã lớp</th>
                                    <th className="py-2">Tên lớp</th>
                                    <th className="py-2">Khóa</th>
                                    <th className="py-2">Khoa</th>
                                    <th className="py-2">Cố vấn học tập</th>
                                    <th className="py-2">Sĩ số</th>
                                    <th className="py-2">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-gray-200 bg-white hover:bg-gray-50">
                                    <td className="pl-4 py-3">LH-001</td>
                                    <td className="py-3">K65-CNTT-01</td>
                                    <td className="py-3">K65</td>
                                    <td className="py-3">Công nghệ thông tin</td>
                                    <td className="py-3">TS. Nguyễn Văn An</td>
                                    <td className="py-3">45</td>
                                    <td className="py-3">
                                        <button className="text-blue-600 hover:underline mr-2">Sửa</button>
                                        <button className="text-red-600 hover:underline">Chi tiết</button>
                                    </td>
                                </tr>
                                <tr className="border border-gray-200 bg-white hover:bg-gray-50">
                                    <td className="pl-4 py-3">LH-002</td>
                                    <td className="py-3">K65-CNTT-02</td>
                                    <td className="py-3">K65</td>
                                    <td className="py-3">Công nghệ thông tin</td>
                                    <td className="py-3">TS. Trần Thị Bích</td>
                                    <td className="py-3">42</td>
                                    <td className="py-3">
                                        <button className="text-blue-600 hover:underline mr-2">Sửa</button>
                                        <button className="text-red-600 hover:underline">Chi tiết</button>
                                    </td>
                                </tr>
                                <tr className="border border-gray-200 bg-white hover:bg-gray-50">
                                    <td className="pl-4 py-3">LH-003</td>
                                    <td className="py-3">K64-KT-01</td>
                                    <td className="py-3">K64</td>
                                    <td className="py-3">Kinh tế</td>
                                    <td className="py-3">ThD. Phạm Thị Dương</td>
                                    <td className="py-3">50</td>
                                    <td className="py-3">
                                        <button className="text-blue-600 hover:underline mr-2">Sửa</button>
                                        <button className="text-red-600 hover:underline">Chi tiết</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <span className="text-gray-500">
                            <span className="">Hiển thị 1 - 3 của 3 lớp</span>
                            <div className="flex justify-end mt-4">
                                <button className="px-3 py-1 border border-gray-300 rounded-l-lg hover:bg-gray-200"><ChevronLeft /></button>
                                <button className="px-3 py-1 border border-gray-300 bg-blue-600 text-white">1</button>
                                <button className="px-3 py-1 border border-gray-300 rounded-r-lg hover:bg-gray-200"><ChevronRight /></button>
                            </div>
                        </span>
                    </div>
                }
                {activeTab === "lopHP" && 
                    <div>
                        <div ref={dropdownRef} className="flex margin-left-[-12px] gap-6 mb-4">
                            <div className="relative w-64">
                                <p className="text-gray-500 text-sm font-bold">HỌC KỲ</p>
                                <div onClick={() => {setOpen(!open); setOpenYear(false); setOpenKhoa(false);}} className="flex justify-between items-center px-4 py-2 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                                    <span>{selectHK}</span>
                                    <ChevronDown />
                                    {open && (
                                        <div className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full z-10 top-full left-0">
                                            {options.map((option) => (
                                                <div
                                                    key={option}
                                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                                    onClick={() => {
                                                        setSelectHK(option);
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="relative w-64">
                                <p className="text-gray-500 text-sm font-bold">NĂM HỌC</p>
                                <div onClick={() => {setOpenYear(!openYear); setOpen(false); setOpenKhoa(false);}} className="flex justify-between items-center px-4 py-2 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                                    <span>{selectYear}</span>
                                    <ChevronDown />
                                    {openYear && (
                                        <div className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full z-10 top-full left-0 max-h-60 overflow-y-auto">
                                            {yearOptions.map((option) => (
                                                <div
                                                    key={option}
                                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                                    onClick={() => {
                                                        setSelectYear(option);
                                                        setOpenYear(false);
                                                    }}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="relative w-64">
                                <p className="text-gray-500 text-sm font-bold">KHOA CHUYÊN MÔN</p>
                                <div onClick={() => {setOpenKhoa(!openKhoa); setOpen(false); setOpenYear(false);}} className="flex justify-between items-center px-4 py-2 rounded-xl bg-gray-100 cursor-pointer hover:bg-gray-200 transition">
                                    <span>{selectKhoa}</span>
                                    <ChevronDown />
                                    {openKhoa && (
                                        <div className="absolute bg-white border border-gray-300 rounded-lg mt-1 w-full z-10 top-full left-0 max-h-60 overflow-y-auto">
                                            {khoaOptions.map((option) => (
                                                <div
                                                    key={option}
                                                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                                    onClick={() => {
                                                        setSelectKhoa(option);
                                                        setOpenKhoa(false);
                                                    }}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center justify-center bg-blue-200 rounded-lg w-10 h-10 m-5">
                                <ListFilter className="text-blue-600 w-5 h-5" />
                            </div>
                        </div>
                        <div className="border-t border-gray-300 p-4">
                            <table className="w-full text-base">
                                <thead className="text-gray-500 border-b">
                                    <tr>
                                        <th className="text-left p-3">MÃ HP</th>
                                        <th className="text-left p-3">TÊN HỌC PHẦN</th>
                                        <th className="text-left p-3">NHÓM</th>
                                        <th className="text-left p-3">GIẢNG VIÊN</th>
                                        <th className="text-left p-3">LỊCH HỌC</th>
                                        <th className="text-left p-3">PHÒNG</th>
                                        <th className="text-left p-3">TRẠNG THÁI</th>
                                        <th className="text-left p-3">THAO TÁC</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courses.map((item) => (
                                        <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="p-3 text-blue-600 font-semibold">{item.id}</td>
                                            <td className="p-3 font-medium">{item.name}</td>
                                            <td className="p-3 text-gray-500">{item.group}</td>
                                            <td className="p-3 flex items-center gap-2">
                                                <div className="w-8 h-8 min-w-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">{item.teacherCode}</div>
                                                <div>
                                                    <p className="">{item.teacher}</p>
                                                </div>
                                            </td>
                                            <td className="p-3">
                                                <div className="bg-gray-100 px-3 py-1 rounded-lg inline-block">{item.day} | {item.time}</div>
                                            </td>
                                            <td className="p-3 font-medium">{item.room}</td>
                                            <td className="p-3">     
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap
                                                    ${item.status === "ĐANG HỌC"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-gray-200 text-gray-600"}`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="p-3 text-gray-400 text-xl cursor-pointer">•••</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <span className="text-gray-500">
                                <span className="">Hiển thị 1 - 3 của 3 lớp</span>
                                <div className="flex justify-end mt-4">
                                    <button className="px-3 py-1 border border-gray-300 rounded-l-lg hover:bg-gray-200"><ChevronLeft /></button>
                                    <button className="px-3 py-1 border border-gray-300 bg-blue-600 text-white">1</button>
                                    <button className="px-3 py-1 border border-gray-300 rounded-r-lg hover:bg-gray-200"><ChevronRight /></button>
                                </div>
                            </span>
                        </div>
                    </div>
                }
            </div>
        </div> 
    )
};
