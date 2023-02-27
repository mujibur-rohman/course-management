import Layouts from "@/pages/components/Layouts";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Table } from "react-daisyui";

const Permission = () => {
  return (
    <Layouts>
      <section className="mt-5">
        <div className="overflow-x-auto">
          <Table className="w-full">
            <Table.Head>
              <span>No</span>
              <span>Role</span>
              <span>Action</span>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <span>1</span>
                <div className="flex items-center space-x-3 truncate">
                  <div className="font-bold">Siswa</div>
                </div>
                <div className="flex gap-2">
                  <Cog8ToothIcon
                    className="w-6 text-gray-400 cursor-pointer transition-all"
                    onClick={() => setIsOpenEdit(true)}
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

export default Permission;
