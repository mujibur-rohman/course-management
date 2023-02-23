import React from "react";
import Layouts from "../components/Layouts";
import menu from "../constant/Menus";

const Siswa = () => {
  console.log(
    "menu",
    menu.map((item, key) => {
      return item.role.filter((x) => x === "siswa") && item.route;
    })
  );
  return (
    <Layouts>
      <main>
        <div className="text-2xl font-bold"> Dashboard Siswa </div>{" "}
      </main>{" "}
    </Layouts>
  );
};
export default Siswa;
