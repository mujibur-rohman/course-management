import Link from "next/link";
import React from "react";
import menu from "../constant/Menus";
import { Menu } from "react-daisyui";
import { useRouter } from "next/router";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const router = useRouter();
  return (
    <div
      className={`sticky top-0 h-screen  py-4 px-5 w-20 bg-base-100 ${
        isOpen ? "xl:w-1/6" : "w-20"
      } transition-all border-r-[1px] border-neutral`}
    >
      <div className="text-center h-20 flex items-center justify-center border-b-[1px] font-bold border-gray-800">
        Course{" "}
      </div>{" "}
      <div className=" flex flex-col gap-4 mt-5">
        {" "}
        <Menu>
          {" "}
          {menu.map((menu) => (
            <Menu.Item>
              <Link
                key={menu.route}
                href={menu.route}
                className={`flex gap-3 p-2 ${
                  isOpen && "xl:py-3 xl:px-4"
                } cursor-pointer rounded-lg hover:bg-primary hover:text-white transition-all`}
              >
                {menu.icon}{" "}
                <h1
                  className={`hidden font-medium opacity-0 justify-self-start ${
                    isOpen && "xl:opacity-100 xl:block"
                  } whitespace-nowrap`}
                >
                  {menu.name}{" "}
                </h1>{" "}
              </Link>{" "}
            </Menu.Item>
          ))}{" "}
        </Menu>{" "}
      </div>{" "}
    </div>
  );
};

export default Sidebar;
