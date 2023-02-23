/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { Button, Dropdown } from "react-daisyui";

const Layouts = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <main className="flex w-full bg-base-300">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />{" "}
      <div className="grow">
        <nav className="sticky h-20 top-0 bg-base-100 border-neutral border-b-[1px] left-0 w-full flex items-center px-4 justify-end xl:justify-between z-10">
          <Bars3BottomLeftIcon
            className="w-6 cursor-pointer h-6 hidden xl:block"
            onClick={() => setIsOpen(!isOpen)}
          />{" "}
          <div className="flex items-center gap-3">
            <h1 className="font-medium"> Users </h1>{" "}
            <Dropdown vertical="end">
              <Button color="ghost" className="avatar" shape="circle">
                <div className="w-10 rounded-full">
                  <img
                    alt="avatar"
                    src="https://api.lorem.space/image/face?hash=33791"
                  />
                </div>{" "}
              </Button>{" "}
              <Dropdown.Menu className="w-52 menu-compact bg-neutral">
                <li>
                  <a className="justify-between">
                    Profile <span className="badge"> New </span>{" "}
                  </a>{" "}
                </li>{" "}
                <Dropdown.Item> Settings </Dropdown.Item>{" "}
                <Dropdown.Item> Logout </Dropdown.Item>{" "}
              </Dropdown.Menu>{" "}
            </Dropdown>{" "}
          </div>{" "}
        </nav>{" "}
        <section className="flex flex-col px-6 py-5 gap-4">
          {" "}
          {/* <p className="sticky top-20 py-2 bg-base-300">
                                    <span className="text-primary">Dashboard</span> / Course
                                  </p> */}{" "}
          <div> {children} </div>{" "}
        </section>{" "}
      </div>{" "}
    </main>
  );
};

export default Layouts;
