import React from "react";
import Link from "next/link";
import * as yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Input } from "react-daisyui";
import withPrivate from "../helper/withPrivate";
import Cookies from "js-cookie";

const Register = () => {
  const initialValues = {
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email().required().trim(),
    name: yup.string().required().trim(),
    password: yup.string().min(6).required().trim(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password must match")
      .required("confirm password is a required field"),
  });

  const onsubmit = async (values) => {
    try {
      await SignUp(values.email, values.password);
      Cookies.set("_admin-panel-user", values.email, { expires: exp });
      Cookies.set("_admin-panel-user_p", values.password, { expires: exp });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already registered", {
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

  return (
    <main className="bg-neutral h-screen flex justify-center items-center">
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
          // console.log(props.hand);
          return (
            <Form className="bg-white p-8 rounded-xl flex flex-col border-[1px] w-1/2 lg:w-1/4">
              <h1 className="text-neutral-700 text-xl text-center font-bold mb-5">
                Register
              </h1>
              <div className="flex flex-col mb-4">
                <Input
                  placeholder="Name"
                  type="text"
                  name="name"
                  className="bg-transparent"
                  color="secondary"
                  onChange={(e) => {
                    props.setFieldValue("name", e.target.value);
                  }}
                  isValidate={!Boolean(props.errors.email)}
                />
                <ErrorMessage name="name">
                  {(err) => <span className="text-sm text-red-500">{err}</span>}
                </ErrorMessage>
              </div>
              <div className="flex flex-col mb-4">
                <Input
                  placeholder="Email"
                  type="text"
                  name="email"
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
              <div className="flex flex-col mb-4">
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  className="bg-transparent"
                  color="secondary"
                  onChange={(e) => {
                    props.setFieldValue("confirmPassword", e.target.value);
                  }}
                  isValidate={!Boolean(props.errors.password)}
                />
                <ErrorMessage name="confirmPassword">
                  {(err) => <span className="text-sm text-red-500">{err}</span>}
                </ErrorMessage>
              </div>
              <Button
                type="submit"
                className={`${
                  props.isSubmitting && "bg-indigo-500"
                } text-white text-center font-bold mb-5`}
              >
                {props.isSubmitting ? "Please Wait" : "Register"}
              </Button>
              <p className="text-sm text-gray-500 mt-3">
                Already Account?{" "}
                <Link href={"/auth/login"} className="text-blue-400">
                  Sign In
                </Link>
              </p>
            </Form>
          );
        }}
      </Formik>
    </main>
  );
};

export default withPrivate(Register);
