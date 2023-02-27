import { PencilSquareIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Input, Mask, Textarea } from "react-daisyui";
import Select from "react-tailwindcss-select";

const FormCourse = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [value, setValue] = useState(null);
  return (
    <div className="bg-neutral p-5 rounded-lg">
      <div className="flex gap-8">
        <div className="self-start relative cursor-pointer">
          <input
            type="file"
            className=" absolute z-[1] top-0 bottom-0 right-0 left-0 cursor-pointer opacity-0"
          />
          <Mask
            className="w-36"
            variant="squircle"
            src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
          />
          <div className=" absolute -bottom-2 right-0 bg-black/40 rounded-full p-3">
            <PencilSquareIcon className="w-6" />
          </div>
        </div>
        <div className="flex flex-col gap-4 grow">
          {/* <h1 className="text-2xl font-medium">Javascript Course</h1> */}
          <Input
            value={"Javascript Course"}
            className="text-2xl font-medium w-full"
            disabled
          />
          <Textarea
            size="md"
            placeholder="Description..."
            // disabled
            className="resize-none h-44"
          />
          <div className="flex flex-col gap-3">
            <label className="font-medium">Instructor</label>
            <Select
              classNames={{
                menuButton: (state) =>
                  "flex text-sm text-gray-500 bg-[#0F172A] rounded-md p-2 shadow-sm transition-all duration-300 cursor-pointer",
                menu: "absolute z-10 w-full shadow-lg border-2 border-[#313a53] bg-[#1E293B] rounded-lg py-1 mt-1.5 text-sm",
                searchBox:
                  "bg-[#0F172A] w-full p-2 outline-none text-[#8cc6ef] rounded-lg",
                searchIcon: "hidden",
                searchContainer: "p-1",
                listItem: () => {
                  return `text-white list-none cursor-pointer py-2 px-2 hover:bg-[#0F172A]`;
                },
              }}
              primaryColor="#ffffff"
              isSearchable
              // value={animal}
              // onChange={this.handleChange}
              options={options}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-medium">Available Course</label>
            <div className="flex gap-2">
              <div className="w-full">
                <Input
                  type="date"
                  className="w-full cursor-pointer date-picker"
                />
                <label className="text-sm">Start Date</label>
              </div>
              <div className="w-full">
                <Input
                  type="date"
                  className="w-full cursor-pointer date-picker"
                />
                <label className="text-sm">End Date</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCourse;
