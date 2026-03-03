import {
  LayoutDashboard,
  Building2,
  School,
  Users,
  UserCheck,
  Calendar,
  ClipboardCheck,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export const SIDEBAR_MENU = [
  {
    group: "Chức năng",
    items: [
      { name: "Bảng điều khiển", path: "/dashboard", icon: LayoutDashboard },
      { name: "Khoa & Ngành", path: "/departments", icon: Building2 },
      { name: "Lớp học", path: "/classes", icon: School },
      { name: "Sinh viên", path: "/students", icon: Users },
      { name: "Giảng viên", path: "/teachers", icon: UserCheck },
      { name: "Lịch học & Thi", path: "/schedule", icon: Calendar },
      { name: "Điểm danh", path: "/attendance", icon: ClipboardCheck },
      { name: "Bảng điểm", path: "/grades", icon: BarChart3 },
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
