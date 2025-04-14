import { Eye, EyeSlash } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface AuthInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  hasFocused: boolean;
  showPassword: boolean;
  togglePassword: () => void;
  isMounted: boolean;
}

const typeMap = {
  name: "text",
  email: "email",
  password: "password",
};

export const AuthInput = ({
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused,
  hasFocused,
  showPassword,
  togglePassword,
  isMounted,
}: AuthInputProps) => (
  <div className="group mb-6" key={label}>
    <div className="relative overflow-hidden">
      <input
        type={label === "password" && showPassword ? "text" : typeMap[label as keyof typeof typeMap]}
        placeholder={label[0].toUpperCase() + label.slice(1)}
        name={label}
        autoComplete="off"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className="peer w-full bg-transparent py-5 text-xl text-zinc-200 outline-none transition placeholder:text-zinc-200/50 dark:text-zinc-800 dark:placeholder:text-zinc-800/50"
      />
      {label === "password" && (
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          {showPassword ? <EyeSlash size={22} /> : <Eye size={22} />}
        </button>
      )}
      {isMounted && (
        <motion.div
          className="h-[2px] w-full bg-gradient-to-r from-white to-transparent absolute bottom-0 left-0 origin-left"
          initial={false}
          animate={{
            scaleX: !hasFocused ? 1 : isFocused ? 1 : 0,
            opacity: !hasFocused || isFocused ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      )}
    </div>
  </div>
);
