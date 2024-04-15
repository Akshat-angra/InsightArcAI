import { useActivationMutation } from "@/redux/features/auth/authApi";
import React, { FC, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useSelector } from "react-redux";

type Props = {
  setRoute: (route: string) => void;
};

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};

const Verification: FC<Props> = ({ setRoute }) => {
  const { token } = useSelector((state: any) => state.auth);
  const [activation, { isSuccess, error }] = useActivationMutation();
  const [invalidError, setInvalidError] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account has been activated successfully");
      setRoute("Login");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
        setInvalidError(true);
      } else {
        console.log("An error has occurred:", error);
      }
    }
  }, [isSuccess, error, setRoute]);
  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
  });
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const VerificationHandler = async () => {
    const verificationNumber = Object.values(verifyNumber).join("");
    if (verificationNumber.length !== 4) {
      setInvalidError(true);
      return;
    }
    await activation({
      activation_token: token,
      activation_code: verificationNumber,
    });
  };

  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);

    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#222831] via-[#273341] to-[#16181c]">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md font-Montserrat text-white">
        <h1 className="text-3xl font-bold text-center text-teal-400 mb-6 font-Josefin">
          Verify Your{" "}
          <span className="bg-clip-text text-transparent text-gradient-darks">
            Account
          </span>
        </h1>
        <div className="w-full flex items-center justify-center mt-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#27ddb1] to-[#6d4aff] flex items-center justify-center">
            <VscWorkspaceTrusted size={40} className="text-white" />
          </div>
        </div>
        <div className="my-4 mx-auto flex items-center justify-around space-x-4">
          {Object.keys(verifyNumber).map((key, index) => (
            <input
              type="number"
              key={key}
              ref={inputRefs[index]}
              className={`text-center w-16 h-16 bg-transparent border-[2px] rounded-[8px] flex items-center text-white justify-center text-[16px] font-Josefin outline-none  ${
                invalidError
                  ? "shake border-red-500"
                  : "border-[#497Df2] dark:border-white"
              }`}
              placeholder=""
              maxLength={1}
              value={verifyNumber[key as keyof VerifyNumber]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ))}
        </div>
        <div className="w-full flex justify-center mt-6">
          <button
            className={`py-3 px-6 rounded-full font-Josefin ${
              invalidError
                ? "bg-red-500 text-white"
                : "bg-gradient-to-r from-[#004080] to-[#001A33] text-white hover:bg-gradient-to-r hover:from-[#0066CC] hover:to-[#004080]"
            }`}
            onClick={VerificationHandler}
          >
            {invalidError ? "Verification Failed" : "Verify OTP"}
          </button>
        </div>
        <br />
        <div className="text-center mt-4 font-Josefin text-sm text-gray-300">
          Go back to sign in?{" "}
          <span
            className="cursor-pointer text-teal-400"
            onClick={() => setRoute("Login")}
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Verification;
