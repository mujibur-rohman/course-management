import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const InitialUser = {
  name: null,
  email: null,
  uid: null,
};

export const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState(InitialUser);

  const setUser = (userCred) => {
    setUserState({ ...userCred });
  };
  const resetUser = () => {
    setUserState(InitialUser);
  };
  return (
    <UserContext.Provider value={{ ...userState, setUser, resetUser }}>
      {children}
    </UserContext.Provider>
  );
};
