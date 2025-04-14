"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Eye, EyeSlash, SpinnerGap } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "@heroui/react";

type Variant = "signin" | "signup" | "ResetPassword";

interface AuthFormProps {
  variant: Variant;
  position?: "left" | "right";
}

const contentMap = {
  signin: {
    title: "Welcome Back!",
    subtitle: "Sign In to access your account again!",
  },
  signup: {
    title: "Create New Account",
    subtitle: "Welcome to Teman Coding! Let’s create account!",
  },
  ResetPassword: {
    title: "Reset Password",
    subtitle: "Enter your email to receive a verification link.",
  },
};

const fieldsMap: Record<Variant, Array<keyof typeof typeMap>> = {
  signup: ["name", "email", "password"],
  signin: ["email", "password"],
  ResetPassword: ["email"],
};

const typeMap = {
  name: "text",
  email: "email",
  password: "password",
};

export const AuthForm = ({ variant, position }: AuthFormProps) => {
  const formEl = useRef<HTMLFormElement | null>(null);
  const [focusedInput, setFocusedInput] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hasFocused, setHasFocused] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const fields = fieldsMap[variant];

  const handleFocus = (index: number) => {
    setHasFocused(true);
    setFocusedInput(index);
  };

  const handleBlur = () => {
    setFocusedInput(null);
    if (!Object.values(inputValues).some((val) => val)) {
      setHasFocused(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      formEl.current?.reset();
      setInputValues({ name: "", email: "", password: "" });
      setHasFocused(false);
    }, 2000);
  };

  const renderInput = (label: keyof typeof inputValues, index: number) => (
    <div className="group mb-6" key={label}>
      <div className="relative overflow-hidden">
        <input
          type={label === "password" && showPassword ? "text" : typeMap[label]}
          placeholder={label[0].toUpperCase() + label.slice(1)}
          name={label}
          autoComplete="off"
          value={inputValues[label]}
          onChange={handleChange}
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
          className="peer w-full bg-transparent py-5 text-xl text-zinc-200 outline-none transition placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
        />
        {label === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            {showPassword ? <EyeSlash size={22} /> : <Eye size={22} />}
          </button>
        )}
        <motion.div
          className="h-[2px] w-full bg-gradient-to-r from-transparent to-white absolute bottom-0 left-0 origin-left"
          initial={false}
          animate={{
            scaleX: !hasFocused ? 1 : focusedInput === index ? 1 : 0,
            opacity: !hasFocused || focusedInput === index ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );

  const renderAuthButton = () => (
    <>
      <Button
        size="lg"
        disabled={isLoading}
        className="mt-2 w-full flex justify-center items-center gap-2 text-base font-semibold bg-gradient-to-r from-[#474FDD] via-[#3773DA] to-[#08BCE9] text-white"
      >
        {isLoading ? (
          <>
            <SpinnerGap className="animate-spin" size={20} />
            Sending...
          </>
        ) : (
          <>
            {variant === "signin"
              ? "Sign-in"
              : variant === "ResetPassword"
              ? "Send Verification Code"
              : "Sign-up"}
          </>
        )}
      </Button>

      {variant !== "ResetPassword" && (
        <Button
          size="lg"
          disabled={isLoading}
          className="mt-2 w-full flex justify-center items-center gap-2 text-base font-semibold bg-transparent border-2 border-white text-white"
        >
          {isLoading ? (
            <>
              <SpinnerGap className="animate-spin" size={20} />
              Sending...
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Image
                src="/images/icons/google.svg"
                alt="Logo"
                width={22}
                height={22}
                draggable={false}
              />
              Sign up with Google
            </div>
          )}
        </Button>
      )}
    </>
  );

  const renderRedirect = () => {
    switch (variant) {
      case "signin":
        return (
          <span>
            Don’t have an account?{" "}
            <a href="/sign-up" className="text-blue-400 hover:underline">
              Sign up
            </a>
          </span>
        );
      case "signup":
        return (
          <span>
            Already have an account?{" "}
            <a href="/sign-in" className="text-blue-400 hover:underline">
              Sign in
            </a>
          </span>
        );
      case "ResetPassword":
        return (
          <>
            <div className="text-sm mb-2">
              Don’t get the link?{" "}
              <a href="#" className="text-blue-400 hover:underline">
                Resend verification link
              </a>
            </div>
            <span>
              Already have an account?{" "}
              <a href="/sign-in" className="text-blue-400 hover:underline">
                Sign in
              </a>
            </span>
          </>
        );
    }
  };

  const { title, subtitle } = contentMap[variant];

  return (
    <motion.div
      className={`flex w-full max-w-[90rem] flex-col gap-3 text-xl px-10 ${
        position === "left"
          ? "items-start"
          : position === "right"
          ? "items-end"
          : "items-center"
      }`}
    >
      <div className="text-center max-w-md w-full mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-[1.5px] text-transparent bg-clip-text bg-gradient-to-r from-[#474FDD] via-[#3773DA] to-[#08BCE9]">
          {title}
        </h1>
        <p className="text-sm">{subtitle}</p>
      </div>

      <form ref={formEl} onSubmit={onSubmit} className="w-full max-w-md">
        {fields.map((field, i) => renderInput(field, i))}

        {variant === "signin" && (
          <div className="mb-4 flex items-center justify-between text-sm text-zinc-300">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-blue-500 w-4 h-4"
              />
              Remember me
            </label>
            <a
              href="/reset-password"
              className="text-blue-400 hover:underline"
            >
              Forgot password?
            </a>
          </div>
        )}

        <div>{renderAuthButton()}</div>

        <div className="mt-4 text-center text-base text-zinc-300">
          {renderRedirect()}
        </div>
      </form>
    </motion.div>
  );
};
