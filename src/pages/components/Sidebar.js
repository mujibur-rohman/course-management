import Link from "next/link";
import React from "react";
import menu from "../constant/Menus";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`sticky top-0 h-screen  py-4 px-5 w-20 ${
        isOpen ? "xl:w-1/6" : "w-20"
      } transition-all border-r-[1px] border-neutral`}
    >
      <div className="text-center h-20 flex items-center justify-center border-b-[1px] font-bold border-gray-800">
        Course
      </div>
      <nav className=" flex flex-col gap-4 mt-5">
        {menu.map((menu) => (
          <Link
            key={menu.route}
            href={menu.route}
            className={`flex gap-3 p-2 ${
              isOpen && "xl:py-3 xl:px-4"
            } cursor-pointer rounded-lg hover:bg-neutral transition-all`}
          >
            {menu.icon}
            <h1
              className={`hidden font-medium opacity-0 justify-self-start ${
                isOpen && "xl:opacity-100 xl:block"
              } whitespace-nowrap`}
            >
              {menu.name}
            </h1>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
