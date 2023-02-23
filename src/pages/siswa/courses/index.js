import React from "react";
import { Card, Button, Link, Pagination, Input } from "react-daisyui";
import Layouts from "@/pages/components/Layouts";
import styled from "styled-components";

const Style = styled.div`
  .text-overflow {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
`;

const AllCourses = () => {
  const data = [
    {
      id: 1,
      name: "React JS",
      text: "React JS - The Complete Guide dfgdjfgidfg isdfjugidsfign dfigsdifg sdhuidsyfiugidfguiysidfg sdyhguisdufguidsfgh ",
      openDate: "20/02/23",
      closeDate: "20/03/23",
      fullname: "John Doe",
    },
    {
      id: 2,
      name: "React Native",
      text: "React Native - The Complete Guide dfgdjfgidfg isdfjugidsfign dfigsdifg sdhuidsyfiugidfguiysidfg sdyhguisdufguidsfgh fhguisdfiguf",
      openDate: "20/02/23",
      closeDate: "20/03/23",
      fullname: "John Doe",
    },
    {
      id: 3,
      name: "Tailwind",
      text: "Tailwind - The Complete Guide dfgdjfgidfg isdfjugidsfign dfigsdifg sdhuidsyfiugidfguiysidfg sdyhguisdufguidsfgh fhguisdfiguf",
      openDate: "20/02/23",
      closeDate: "20/03/23",
      fullname: "John Doe",
    },
    {
      id: 4,
      name: "Daisy UI",
      text: "Daisy UI - The Complete Guide dfgdjfgidfg isdfjugidsfign dfigsdifg sdhuidsyfiugidfguiysidfg sdyhguisdufguidsfgh fhguisdfiguf",
      openDate: "20/02/23",
      closeDate: "20/03/23",
      fullname: "John Doe",
    },
    {
      id: 5,
      name: "React Inertia",
      text: "React Inertia - The Complete Guide dfgdjfgidfg isdfjugidsfign dfigsdifg sdhuidsyfiugidfguiysidfg sdyhguisdufguidsfgh fhguisdfiguf",
      openDate: "20/02/23",
      closeDate: "20/03/23",
      fullname: "John Doe",
    },
    {
      id: 6,
      name: "Next JS",
      text: "Next JS - The Complete Guide dfgdjfgidfg isdfjugidsfign dfigsdifg sdhuidsyfiugidfguiysidfg sdyhguisdufguidsfgh fhguisdfiguf",
      openDate: "20/02/23",
      closeDate: "20/03/23",
      fullname: "John Doe",
    },
    {
      id: 7,
      name: "SASS",
      text: "SASS - The Complete Guide dfgdjfgidfg isdfjugidsfign dfigsdifg sdhuidsyfiugidfguiysidfg sdyhguisdufguidsfgh fhguisdfiguf",
      openDate: "20/02/23",
      closeDate: "20/03/23",
      fullname: "John Doe",
    },
  ];
  return (
    <Layouts>
      <Style>
        <div className="text-2xl font-bold"> All Courses</div>
        <Input placeholder="Looking for..." className="w-full my-5" />
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, key) => {
            return (
              <Link href="/siswa" key={key} className="no-underline">
                <Card side="lg">
                  <Card.Body className="p-0 flex flex-row gap-0 text-neutral w-full ">
                    <div className="max-w-max" style={{ maxWidth: "7rem" }}>
                      <Card.Image
                        src="https://api.lorem.space/image/shoes?w=400&h=225"
                        alt=""
                        className="max-w-xs h-48 rounded-l-xl"
                      />
                    </div>
                    <div className="bg-white rounded-r-xl pl-10">
                      <Card.Title className="font-bold text-2xl">
                        {item.name}
                      </Card.Title>
                      <p
                        className="font-semibold whitespace-pre-wrap break-keep text-ellipsis overflow-hidden mb-0.5 line-clamp-4 py-1 text-sm text-overflow"
                        style={{ maxWidth: "15rem" }}
                      >
                        {item.text}
                      </p>
                      <div className="flex font-semibold">
                        <p className="flex-grow-0 text-sm">{item.openDate}</p>
                        <p className="flex-grow-0 mx-1 text-sm">-</p>
                        <p className="flex-grow-0 text-sm">{item.closeDate}</p>
                      </div>
                      {/* <div className="text-neutral">asvaghsdfgsdfgdsfgsdfs</div> */}
                    </div>
                  </Card.Body>{" "}
                </Card>
              </Link>
            );
          })}
        </div>
        <Pagination className="items-center w-full justify-center mt-5">
          <Button>Prev</Button>
          <span className="px-5 text-md font-bold ">1 of 1</span>
          <Button>Next</Button>
        </Pagination>
      </Style>
    </Layouts>
  );
};
export default AllCourses;
