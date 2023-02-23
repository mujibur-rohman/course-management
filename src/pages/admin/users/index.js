import Layouts from "@/pages/components/Layouts";
import { Cog8ToothIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Button, Dropdown, Table } from "react-daisyui";

const Users = () => {
  return (
    <Layouts>
      <section className="mt-5">
        <div className="overflow-x-auto">
          <Table className="w-full">
            <Table.Head>
              <span>No</span>
              <span>Username</span>
              <span>Email</span>
              <span>Action</span>
            </Table.Head>

            <Table.Body>
              <Table.Row>
                <span>1</span>
                <div className="flex items-center space-x-3 truncate">
                  johndoe20
                </div>
                <div className="flex items-center space-x-3 truncate">
                  johndoe@gmail.com
                </div>
                <div className="flex items-center space-x-3 truncate">
                  <Button size="sm" color="warning">
                    Change Password
                  </Button>
                  <Button size="sm" color="error">
                    <TrashIcon className="w-5" />
                  </Button>
                </div>
                {/* <div className="flex gap-2 my-10">
                  <div className="">
                    <Dropdown>
                      <Dropdown.Toggle>Click</Dropdown.Toggle>
                      <Dropdown.Menu className="w-52">
                        <Dropdown.Item>Item 1</Dropdown.Item>
                        <Dropdown.Item>Item 2</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div> */}
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </section>
    </Layouts>
  );
};

export default Users;
