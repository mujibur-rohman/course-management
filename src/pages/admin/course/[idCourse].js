import Layouts from "@/pages/components/Layouts";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Button, Input, Mask, Table, Textarea } from "react-daisyui";
import Select from "react-tailwindcss-select";
import InfoCourseCard from "./components/InfoCourseCard";
import FormCourse from "./components/FormCourse";

const CourseDetail = () => {
  return (
    <Layouts>
      <section className="flex gap-3">
        <div className="basis-8/12 flex flex-col gap-4">
          <FormCourse />
          <div className="bg-neutral p-5 rounded-lg">
            <h1 className="text-2xl font-bold mb-5">Content</h1>
            <div className="flex flex-col gap-4">
              <div className="bg-base-100 px-3 py-4 flex justify-between rounded-lg font-medium">
                <p>Lesson 1 : Introduction</p>
                <div className="flex gap-2">
                  <PencilSquareIcon className="w-5 cursor-pointer" />
                  <TrashIcon className="w-5 cursor-pointer" />
                </div>
              </div>
              <div className="bg-base-100 p-3 rounded-lg font-medium">
                Lesson 1
              </div>
              <div>
                <Button
                  color="primary"
                  size="sm"
                  className="text-white"
                  startIcon={<PlusIcon className="w-5" />}
                >
                  Add Lesson
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="basis-4/12 flex flex-col gap-3 sticky h-36 top-36">
          <InfoCourseCard />
          <div className="bg-neutral p-3 rounded-lg">
            <h3 className="font-bold text-lg">Students</h3>
            <div className="overflow-x-auto mt-2">
              <Table className="w-full">
                <Table.Head>
                  <span />
                  <span>Username</span>
                  <span>Email</span>
                </Table.Head>

                <Table.Body>
                  <Table.Row>
                    <span>1</span>
                    <span>johndoe</span>
                    <span>johndoe@gmail.com</span>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};

export default CourseDetail;
