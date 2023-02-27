import Layouts from "@/pages/components/Layouts";
import ENROLLMENT from "@/pages/constant/StatusEnrollment";
import {
  CheckCircleIcon,
  PencilIcon,
  TrashIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useState } from "react";
import { Badge, Button, Mask, Table } from "react-daisyui";

const Enrollment = () => {
  const [tabValue, setTabValue] = useState(0);
  return (
    <Layouts>
      <section className="mt-5">
        <div className="flex mb-5">
          <div className="tabs tabs-boxed font-medium">
            {ENROLLMENT.map((enroll) => (
              <a
                key={enroll.value}
                className={`tab ${tabValue === enroll.value && "tab-active"}`}
              >
                {enroll.name.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table className="w-full">
            <Table.Head>
              <span>No</span>
              <span>Username</span>
              <span>Course</span>
              <span>Status</span>
              <span>Action</span>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <span>1</span>
                <div className="flex items-center space-x-3 truncate">
                  <div className="font-bold">johndoe20</div>
                </div>
                <span>Javascript Course</span>
                <div className="flex items-center space-x-3 truncate">
                  <Badge color="warning">Pending</Badge>
                </div>
                <div className="flex gap-2">
                  <CheckCircleIcon
                    className="w-9 text-success cursor-pointer transition-all"
                    onClick={() => setIsOpenEdit(true)}
                  />
                  <XCircleIcon
                    className="w-9 text-error cursor-pointer transition-all"
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

export default Enrollment;
