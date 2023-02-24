import {
  BookOpenIcon,
  LockClosedIcon,
  Squares2X2Icon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const menu = [
  {
    name: "Dashboard",
    route: "/siswa",
    icon: <Squares2X2Icon className="w-6 h-6" />,
    role: ["siswa"],
  },
  {
    name: "Courses",
    route: "/siswa/courses",
    icon: <BookOpenIcon className="w-6 h-6" />,
    role: ["siswa"],
  },
  {
    name: "Users",
    route: "/admin/users",
    icon: <UserIcon className="w-6 h-6" />,
    role: ["admin"],
  },
  {
    name: "Permission",
    route: "/admin/permission",
    icon: <LockClosedIcon className="w-6 h-6" />,
    role: ["siswa"],
  },
  {
    name: "Dashboard",
    route: "/admin",
    icon: <Squares2X2Icon className="w-6 h-6" />,
    role: ["admin", "pengajar"],
  },
  {
    name: "Course",
    route: "/admin/course",
    icon: <BookOpenIcon className="w-6 h-6" />,
    role: ["admin", "pengajar"],
  },
  {
    name: "Enrollment",
    route: "/admin/enrollment",
    icon: <UsersIcon className="w-6 h-6" />,
    role: ["admin"],
  },
  {
    name: "Permission",
    route: "/admin/permission",
    icon: <LockClosedIcon className="w-6 h-6" />,
    role: ["admin"],
  },
];

export default menu;
