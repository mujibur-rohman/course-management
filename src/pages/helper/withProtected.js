import { useUser } from "../context/userContext";
import { useRouter } from "next/router";
import React from "react";

const withProtected = (Pages) => {
  return function WithProtected() {
    const router = useRouter();
    const user = useUser();
    const { uid } = user;

    if (!uid) {
      router.replace("/auth/login");
      return <></>;
    }

    return <Pages />;
  };
};

export default withProtected;
