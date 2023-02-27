import Layouts from "@/pages/components/Layouts";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Button, Collapse, Table } from "react-daisyui";
import InfoCourseCard from "./components/InfoCourseCard";
import FormCourse from "./components/FormCourse";
import FormContent from "./components/FormContent";

const CourseDetail = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  return (
    <Layouts>
      <section className="flex gap-3">
        <div className="basis-8/12 flex flex-col gap-4">
          <FormCourse />
          <div className="bg-neutral p-5 rounded-lg">
            <h1 className="text-2xl font-bold mb-5">Content</h1>
            <div className="flex flex-col gap-4">
              <Collapse
                className="border border-base-300 bg-base-100 rounded-box"
                icon="arrow"
                checkbox
              >
                <Collapse.Title className="font-medium flex justify-between">
                  <p>Lesson 1 : Introduction</p>
                </Collapse.Title>
                <Collapse.Content>
                  <p className="mb-4">Description</p>
                  <div className="flex gap-2">
                    <Button size="sm" color="error" variant="outline">
                      <TrashIcon className="w-5 cursor-pointer" />
                    </Button>
                    <Button size="sm" color="warning" variant="outline">
                      <PencilSquareIcon className="w-5 cursor-pointer" />
                    </Button>
                  </div>
                </Collapse.Content>
              </Collapse>
              <Collapse
                className="border border-base-300 bg-base-100 rounded-box"
                icon="arrow"
                checkbox
              >
                <Collapse.Title className="font-medium flex justify-between">
                  <p>Lesson 1 : Introduction</p>
                </Collapse.Title>
                <Collapse.Content>
                  <p className="mb-4">Description</p>
                  <div className="flex gap-2">
                    <Button size="sm" color="error" variant="outline">
                      <TrashIcon className="w-5 cursor-pointer" />
                    </Button>
                    <Button size="sm" color="warning" variant="outline">
                      <PencilSquareIcon className="w-5 cursor-pointer" />
                    </Button>
                  </div>
                </Collapse.Content>
              </Collapse>
              <Collapse
                className="border border-base-300 bg-base-100 rounded-box"
                icon="arrow"
                checkbox
              >
                <Collapse.Title className="font-medium flex justify-between">
                  <p>Lesson 1 : Introduction</p>
                </Collapse.Title>
                <Collapse.Content>
                  <p className="mb-4">Description</p>
                  <div className="flex gap-2">
                    <Button size="sm" color="error" variant="outline">
                      <TrashIcon className="w-5 cursor-pointer" />
                    </Button>
                    <Button size="sm" color="warning" variant="outline">
                      <PencilSquareIcon className="w-5 cursor-pointer" />
                    </Button>
                  </div>
                </Collapse.Content>
              </Collapse>
              <Collapse
                className="border border-base-300 bg-base-100 rounded-box"
                icon="arrow"
                checkbox
              >
                <Collapse.Title className="font-medium flex justify-between">
                  <p>Lesson 1 : Introduction</p>
                </Collapse.Title>
                <Collapse.Content>
                  <p className="mb-4">Description</p>
                  <div className="flex gap-2">
                    <Button size="sm" color="error" variant="outline">
                      <TrashIcon className="w-5 cursor-pointer" />
                    </Button>
                    <Button size="sm" color="warning" variant="outline">
                      <PencilSquareIcon className="w-5 cursor-pointer" />
                    </Button>
                  </div>
                </Collapse.Content>
              </Collapse>
              <div>
                <Button
                  color="primary"
                  size="sm"
                  className="text-white"
                  startIcon={<PlusIcon className="w-5" />}
                  onClick={() => setIsOpenCreate(true)}
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

      {/* MODAL */}
      <FormContent isOpen={isOpenCreate} setIsOpen={setIsOpenCreate} />
    </Layouts>
  );
};

export default CourseDetail;
