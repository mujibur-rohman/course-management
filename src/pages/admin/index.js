import Image from "next/image";
import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Dropdown,
  Indicator,
  Menu,
  Navbar,
} from "react-daisyui";

const Dashboard = () => {
  return (
    <main className="flex">
      <div className="min-h-screen sticky top-0 basis-1/6 border-r-[1px] border-gray-800">
        <div className="text-center h-20 flex items-center justify-center">
          Course Management
        </div>
        <nav className="p-4 flex flex-col gap-4">
          <div className="bg-slate-700 p-5 cursor-pointer rounded-lg">
            Dashboard
          </div>
          <div className="bg-slate-700 p-5 cursor-pointer rounded-lg">
            Dashboard
          </div>
        </nav>
      </div>
      <div>Dashboard</div>
    </main>
  );
};

export default Dashboard;
