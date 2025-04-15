"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { AuthTitle } from "./AuthTitle";
import { AuthInput } from "./AuthInput";
import { AuthButton } from "./AuthButton";
import { AuthRedirect } from "./AuthRedirect";
import { RememberMe } from "./RememberMe";

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

const fieldsMap: Record<Variant, Array<"name" | "email" | "password">> = {
  signup: ["name", "email", "password"],
  signin: ["email", "password"],
  ResetPassword: ["email"],
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      <AuthTitle title={title} subtitle={subtitle} />

      <form ref={formEl} onSubmit={onSubmit} className="w-full max-w-md">
        {fields.map((field, i) => (
          <AuthInput
            key={field}
            label={field}
            value={inputValues[field]}
            onChange={handleChange}
            onFocus={() => handleFocus(i)}
            onBlur={handleBlur}
            isFocused={focusedInput === i}
            hasFocused={hasFocused}
            showPassword={showPassword}
            togglePassword={() => setShowPassword(!showPassword)}
            isMounted={isMounted}
          />
        ))}

        {variant === "signin" && (
          <RememberMe checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
        )}

        <div>
          <AuthButton variant={variant} isLoading={isLoading} />
        </div>

        <div className="mt-4 text-center text-base text-zinc-300">
          <AuthRedirect variant={variant} />
        </div>
      </form>
    </motion.div>
  );
};
