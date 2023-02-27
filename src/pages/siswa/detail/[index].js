import React from "react";
import thumbnail from "../assets/thumbnail.jpg";
import Image from "next/image";

const DetailCourses = () => {
  return (
    <div

    // style="background-image: url('../assets/thumbnail.jpg')"
    >
      <Image
        src={thumbnail}
        alt=""
        className="w-full h-96 relative object-cover"
      />{" "}
      <div
        className="absolute top-0 bottom-0 left-0 right-0 opacity-0.5 h-96"
        style={{ backgroundColor: "#00000082" }}
      >
        {" "}
      </div>{" "}
    </div>
  );
};

export default DetailCourses;
