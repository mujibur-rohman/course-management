import Layouts from "@/pages/components/Layouts";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { Button, Mask, Table } from "react-daisyui";

const Course = () => {
  return (
    <Layouts>
      <section className="mt-5">
        <div className="flex justify-end mb-5">
          <Button color="primary" className="text-white">
            Add Course
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table className="w-full">
            <Table.Head>
              <span>No</span>
              <span>Name Course</span>
              <span>Available Course</span>
              <span>Instructor</span>
              <span>Action</span>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <span>1</span>
                <Link
                  href={"/admin/course/1"}
                  className="flex items-center space-x-3 truncate cursor-pointer"
                >
                  <Mask
                    variant="squircle"
                    src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
                  />
                  <div>
                    <div className="font-bold text-primary ">
                      React JS Course
                    </div>
                  </div>
                </Link>
                <span>20 Des 2022 - 21 Des 2022</span>
                <div className="flex items-center space-x-3 truncate">
                  <Mask
                    variant="circle"
                    className="w-8"
                    src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
                  />
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <PencilIcon
                    className="w-5 h-5 text-gray-400 cursor-pointer hover:text-warning transition-all"
                    onClick={() => setIsOpenEdit(true)}
                  />
                  <TrashIcon
                    className="w-5 h-5 text-gray-400 cursor-pointer hover:text-error transition-all"
                    onClick={() => setIsOpenDelete(true)}
                  />
                </div>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </section>
    </Layouts>
  );
};

export default Course;
