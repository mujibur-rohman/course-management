/* eslint-disable @next/next/no-img-element */
import Layouts from "@/pages/components/Layouts";
import {
  EllipsisVerticalIcon,
  EnvelopeIcon,
  PencilSquareIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Button, Dropdown, Input, Mask, Navbar, Textarea } from "react-daisyui";

const Profile = () => {
  return (
    <Layouts>
      <div className="bg-neutral rounded-lg overflow-hidden">
        <div className=" bg-gradient-to-r from-purple-500 to-pink-500 w-full h-36"></div>
        <div className="flex flex-col gap-5 -mt-28 p-7">
          <div className="flex justify-between">
            <div className="self-start relative cursor-pointer rounded-full overflow-hidden border-4">
              <input
                type="file"
                className=" absolute z-[1] top-0 bottom-0 right-0 left-0 cursor-pointer opacity-0"
              />
              <img
                alt="avatar"
                className="w-36"
                variant="circle"
                src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
              />
              <div className=" absolute bottom-0 flex justify-center py-2 left-0 right-0 bg-black/40">
                <PencilSquareIcon className="w-6" />
              </div>
            </div>
            <Dropdown className="mt-24">
              <Dropdown.Toggle color="ghost">
                <EllipsisVerticalIcon className="w-6" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-52 -ml-36">
                <Dropdown.Item>Edit Profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">John Doe</h1>
            <div className="flex gap-3">
              <h1 className="text-primary">@johndoe20</h1>
              <div className="flex gap-1 text-gray-400">
                <EnvelopeIcon className="w-5" />
                <h1>johndoe123@gmail.com</h1>
              </div>
              <div className="flex gap-1 text-gray-400">
                <UserCircleIcon className="w-5" />
                <h1>Laki-Laki</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-3 mt-4">
        <div className="bg-neutral flex-col xl:flex-row xl:basis-8/12 rounded-lg p-4">
          <h1 className="text-xl font-medium">My Course</h1>
        </div>
        <div className="bg-neutral flex-col xl:flex-row xl:basis-4/12 rounded-lg p-4">
          <h1 className="text-xl font-medium">Change Password</h1>
          <form className="mt-5 flex flex-col gap-3">
            <Input
              placeholder="Old Password"
              type="password"
              className="w-full"
            />
            <Input
              placeholder="New Password"
              type="password"
              className="w-full"
            />
            <Button color="primary" className="self-start text-white">
              Change
            </Button>
          </form>
        </div>
      </div>
    </Layouts>
  );
};

export default Profile;
