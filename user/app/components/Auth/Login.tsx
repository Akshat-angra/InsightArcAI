import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillGithub,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter a valid email address"),
  password: Yup.string().required("Please enter a valid password").min(6),
});

const Login: FC<Props> = ({ setRoute, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isSuccess, error }] = useLoginMutation();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      await login({ email, password });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("login successfully saved");
      setOpen(false);
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const handleSignUpClick = () => {
    setRoute("signup");
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-gradient-to-br from-[#222831] via-[#273341] to-[#16181c] rounded-lg shadow-md font-Josefin">
      <h1 className="text-3xl font-bold text-center text-teal-400 mb-6">
        Login with{" "}
        <span className="bg-clip-text text-transparent text-gradient-darks">
          INSIGHT
        </span>
        <sup className="text-gradient-darks">Arc</sup>
        <span className="text-gradient-darks">AI</span>
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-md text-gray-300" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name=""
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="InsightArcAI@gmail.com"
            className={`${
              errors.email && touched.email && "border-red-500"
            } w-full text-black bg-opacity-40 bg-gray-700 border-b-2 py-3 px-4 outline-none focus:border-teal-400 transition duration-300 font-Montserrat text-lg`}
          />
          {errors.email && touched.email && (
            <span className="text-red-500 text-xs">{errors.email}</span>
          )}
        </div>

        <div className="mt-4">
          <label className="block text-md text-gray-300" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="Password@insightArcAI@#$"
              className={`${
                errors.password && touched.password && "border-red-500"
              } w-full text-black bg-opacity-40 bg-gray-700 border-b-2 py-3 px-4 outline-none focus:border-teal-400 transition duration-300 text-lg`}
            />
            <div className="absolute top-2 right-2 cursor-pointer">
              {showPassword ? (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPassword(false)}
                  className="text-gradient-darks"
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setShowPassword(true)}
                  className="text-teal-400"
                />
              )}
            </div>
          </div>
          {errors.password && touched.password && (
            <span className="text-red-500 text-xs">{errors.password}</span>
          )}
        </div>

        <button
          type="submit"
          value="Login"
          className="w-full bg-gradient-to-r from-[#004080] to-[#001A33] text-white hover:bg-gradient-to-r hover:from-[#0066CC] hover:to-[#004080] py-3 rounded-full transition duration-300 font-Josefin text-lg mt-6"
        >
          Login
        </button>
        <hr />
        <div className="flex flex-col sm:flex-row items-center justify-center mt-4">
          <button
            type="button"
            className="flex items-center justify-center bg-gray-800 text-white py-2 px-4 mb-2 sm:mb-0 sm:mr-2 rounded-[10px] hover:text-black hover:bg-white"
          >
            <AiFillGithub className="text-lg mr-2" />
            GitHub
          </button>
          <button
            type="button"
            className="flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-[10px] mt-2 sm:mt-0 hover:text-black hover:bg-white"
          >
            <FcGoogle className="text-lg mr-2" />
            Google
          </button>
        </div>
        <br />
        <p className="text-gray-300 text-sm text-center">
          Don't have an account?{" "}
          <span
            className="cursor-pointer text-teal-400"
            onClick={() => setRoute("Sign-Up")}
          >
            Sign Up here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
