import { useUser } from "../context/userContext";
import { useRouter } from "next/router";
import React from "react";

const withPrivate = (Pages) => {
  return function WithPrivate() {
    const router = useRouter();
    const user = useUser();
    const { uid } = false;

    if (uid) {
      router.replace("/siswa");
      return <></>;
    }

    return <Pages />;
  };
};

export default withPrivate;
