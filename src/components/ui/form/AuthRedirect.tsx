import Link from "next/link";

interface AuthRedirectProps {
  variant: "signin" | "signup" | "ResetPassword";
}

export const AuthRedirect = ({ variant }: AuthRedirectProps) => {
  switch (variant) {
    case "signin":
      return (
        <span>
          Don’t have an account?{" "}
          <Link href="/sign-up" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </span>
      );
    case "signup":
      return (
        <span>
          Already have an account?{" "}
          <Link href="/sign-in" className="text-blue-400 hover:underline">
            Sign in
          </Link>
        </span>
      );
    case "ResetPassword":
      return (
        <>
          <div className="text-sm mb-2">
            Don’t get the link?{" "}
            <Link href="#" className="text-blue-400 hover:underline">
              Resend verification link
            </Link>
          </div>
          <span>
            Already have an account?{" "}
            <Link href="/sign-in" className="text-blue-400 hover:underline">
              Sign in
            </Link>
          </span>
        </>
      );
  }
};
