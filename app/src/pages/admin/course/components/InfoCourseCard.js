import { ArrowSmallDownIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Button } from "react-daisyui";

const InfoCourseCard = () => {
  return (
    <div className="bg-neutral p-3 rounded-lg">
      <h3 className="font-bold text-lg mb-1">Course</h3>
      <table className="text-sm">
        <tbody>
          <tr>
            <td className="font-medium pr-8">Available Course</td>
            <td className="pr-3">:</td>
            <td className="text-info">21 Des 2022 - 22 Des 2022</td>
          </tr>
          <tr>
            <td className="font-medium">Instructor</td>
            <td>:</td>
            <td className="text-info">John Doe</td>
          </tr>
        </tbody>
      </table>
      <div className="flex gap-3 mt-3 justify-end">
        <Button
          color="primary"
          size="sm"
          className="text-white"
          startIcon={<ArrowSmallDownIcon className="w-5" />}
        >
          Save
        </Button>
        <Button
          variant="outline"
          color="error"
          size="sm"
          startIcon={<TrashIcon className="w-5" />}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default InfoCourseCard;
