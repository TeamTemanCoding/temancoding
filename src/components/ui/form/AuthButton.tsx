import { Button } from "@heroui/react";
import { SpinnerGap } from "@phosphor-icons/react";
import Image from "next/image";

interface AuthButtonProps {
  variant: "signin" | "signup" | "ResetPassword";
  isLoading: boolean;
}

export const AuthButton = ({ variant, isLoading }: AuthButtonProps) => (
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
        variant="bordered"
        className="mt-2 w-full flex justify-center items-center gap-2 text-base font-semibold border-white text-white"
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
              alt="Google"
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
