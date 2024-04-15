import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter a valid email address"),
  password: Yup.string().required("Please enter a valid password").min(6),
});

const SignUp: FC<Props> = ({ setRoute }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [register, { data, error, isSuccess }] = useRegisterMutation();

  useEffect(() => {
    console.log("isSuccess:", isSuccess);
    console.log("data:", data);
    console.log("error:", error);

    if (isSuccess) {
      console.log("Registration successful!");
      const message =
        data?.message ||
        "Registration successful! Please log in to access the platform.";
      toast.success(message);
      setRoute("Verification");
    }
    if (error) {
      console.log("Registration error:", error);
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      } else {
        toast.error("An error occurred during registration.");
      }
    }
  }, [isSuccess, data, error, setRoute]);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      const data = {
        name,
        email,
        password,
      };
      await register(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const handleSignInClick = () => {
    setRoute("signin");
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-gradient-to-br from-[#222831] via-[#273341] to-[#16181c] rounded-lg shadow-md font-Josefin">
      <h1 className="text-3xl font-bold text-center text-teal-400 mb-6">
        Join to{" "}
        <span className="bg-clip-text text-transparent text-gradient-darks">
          INSIGHT
        </span>
        <sup className="text-gradient-darks">Arc</sup>
        <span className="text-gradient-darks">AI</span>
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <div className="mb-4">
            <label className="block text-md text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name=""
              value={values.name}
              onChange={handleChange}
              id="name"
              placeholder="Akshat Angra"
              className={`${
                errors.name && touched.name && "border-red-500"
              } w-full text-black bg-opacity-40 bg-gray-700 border-b-2 py-3 px-4 outline-none focus:border-teal-400 transition duration-300 font-Montserrat text-lg`}
            />
            {errors.name && touched.name && (
              <span className="text-red-500 text-xs">{errors.name}</span>
            )}
          </div>
          <label className="block text-md text-gray-300" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
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
          value="Sign Up"
          className="w-full bg-gradient-to-r from-[#004080] to-[#001A33] text-white hover:bg-gradient-to-r hover:from-[#0066CC] hover:to-[#004080] py-3 rounded-full transition duration-300 font-Josefin text-lg mt-6"
        >
          Sign Up
        </button>
        <p className="text-gray-300 text-sm mt-4 text-center">
          Already have an account?{" "}
          <span
            className="cursor-pointer text-teal-400"
            onClick={() => setRoute("Login")}
          >
            Sign In here
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
