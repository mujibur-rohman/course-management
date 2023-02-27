import * as yup from "yup";
import { Button, Input } from "react-daisyui";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import withPrivate from "../helper/withPrivate";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Auth = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const onsubmit = async (values) => {
    try {
      await SignIn(values.email, values.password);
      router.replace("/auth/login");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("User Not Found", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      }
      if (error.code === "auth/wrong-password") {
        toast.error("Wrong Password", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const validationSchema = yup.object({
    email: yup.string().email().required().trim(),
    password: yup.string().min(6).required().trim(),
  });
  return (
    <main className="neutral h-screen flex justify-center items-center">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
      />
      <Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {(props) => {
          // console.log(props.errors);
          return (
            <Form className="bg-white p-8 rounded-xl flex flex-col border-[1px] w-1/2 lg:w-1/4">
              <h1 className="text-neutral-700 text-xl text-center font-bold mb-5">
                Login
              </h1>
              <div className="flex flex-col mb-4">
                <Input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="bg-transparent"
                  color="secondary"
                  onChange={(e) => {
                    props.setFieldValue("email", e.target.value);
                  }}
                  isValidate={!Boolean(props.errors.email)}
                />
                <ErrorMessage name="email">
                  {(err) => <span className="text-sm text-red-500">{err}</span>}
                </ErrorMessage>
              </div>
              <div className="flex flex-col mb-4">
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  className="bg-transparent"
                  color="secondary"
                  onChange={(e) => {
                    props.setFieldValue("password", e.target.value);
                  }}
                  isValidate={!Boolean(props.errors.password)}
                />
                <ErrorMessage name="password">
                  {(err) => <span className="text-sm text-red-500">{err}</span>}
                </ErrorMessage>
              </div>
              <Button
                type="submit"
                className={`${
                  props.isSubmitting && "bg-indigo-500"
                } text-white text-center font-bold mb-5`}
              >
                {props.isSubmitting ? "Please Wait" : "Sign In"}
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                Dont have account?{" "}
                <Link href={"/auth/register"} className="text-blue-400">
                  Register
                </Link>
              </p>
            </Form>
          );
        }}
      </Formik>
    </main>
  );
};

export default withPrivate(Auth);
