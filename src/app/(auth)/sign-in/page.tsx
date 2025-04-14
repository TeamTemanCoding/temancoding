import Image from "next/image";
import { AuthForm } from "~/components/ui/Form";

export default function SignIn() {
  return (
    <>
      <div className="min-h-screen bg-[url('/images/backgrounds/signin.svg')] bg-cover bg-center flex flex-col">
        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <Image src="/images/logo.svg" alt="Logo" width={143} height={46.03} />
        </div>
        <div className="flex flex-1 items-center">
          <AuthForm variant="signin" position="left" />
        </div>
      </div>
    </>
  );
}
