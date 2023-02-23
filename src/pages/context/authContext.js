/* eslint-disable react-hooks/exhaustive-deps */
import Spinner from "@/components/Spinner";
import { InitialUser, useUser } from "./userContext";

const { auth } = require("@/services/firebase");
const { useEffect, useState } = require("react");

const AuthStateChangeProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useUser();
  const { setUser } = user;

  const InitialAuthStateChange = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
          name: user.displayName,
        });
      } else {
        setUser(InitialUser);
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    InitialAuthStateChange();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );

  return children;
};

export default AuthStateChangeProvider;
