import {
  LayoutDashboard,
  CalendarDays,
  Star,
  BookOpen,
  Banknote,
  Settings,
  LogOut,
} from "lucide-react";

export const SIDEBAR_MENU = [
  {
    group: "Chức năng",
    items: [
      { name: "Bảng điều khiển", path: "/dashboard", icon: LayoutDashboard },
      { name: "Lịch học", path: "/departments", icon: CalendarDays },
      { name: "Kết quả học tập", path: "/classes", icon: Star },
      { name: "Đăng ký học phần", path: "/students", icon: BookOpen },
      { name: "Học phí", path: "/teachers", icon: Banknote },
    ],
  },
  {
    group: "Hệ thống",
    items: [
      { name: "Cài đặt", path: "/settings", icon: Settings },
      { name: "Đăng xuất", path: "/logout", icon: LogOut },
    ],
  },
] as const;
