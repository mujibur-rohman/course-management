import React from "react";
import { Card, Button, Link, Pagination, Input } from "react-daisyui";
import Layouts from "@/pages/components/Layouts";
import styled from "styled-components";
import ProfilDummy from "../assets/profil-dummy.png";
import Image from "next/image";

const Style = styled.div`
  .text-overflow {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    whitespace: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
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
        <div className="sticky top-20 py-2 bg-base-300 z-40">
          <p>
            <span className="text-primary"> Dashboard </span> / Courses{" "}
          </p>
        </div>
        <div className="text-2xl font-bold"> All Courses</div>
        <Input placeholder="Looking for..." className="w-full my-5" />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4">
          {data.map((item, key) => {
            return (
              <Link
                href={`/siswa/detail/:${item.id}`}
                key={key}
                className="hover:no-underline"
              >
                <Card
                  side="lg"
                  className="relative max-w-fit lg:m-0 sm:m-auto xs:m-auto"
                >
                  <Card.Body className="p-0 flex flex-row gap-0 text-neutral max-w-xs no-underline">
                    <div>
                      <Card.Image
                        src="https://api.lorem.space/image/shoes?w=400&h=225"
                        alt=""
                        className="w-30 h-48 rounded-l-xl object-cover"
                      />
                    </div>
                    <div className="bg-white rounded-r-xl pt-2 pr-2 pl-10 max-w-lg h-48">
                      <Card.Title className="font-black text-2xl">
                        {item.name}
                      </Card.Title>
                      <p className="font-semibold mb-0.5 py-1 text-sm text-overflow ">
                        {item.text}
                      </p>
                      <div className="flex font-semibold">
                        <p className="flex-grow-0 text-sm">{item.openDate}</p>
                        <p className="flex-grow-0 mx-1 text-sm">-</p>
                        <p className="flex-grow-0 text-sm">{item.closeDate}</p>
                      </div>
                      <div className="absolute left-14 bottom-3 flex items-center">
                        <Image
                          src={ProfilDummy}
                          alt=""
                          className="w-14 h-14 rounded-full border-4 border-neutral mr-2"
                        />
                        <p className="font-semibold">{item.fullname}</p>
                      </div>
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
