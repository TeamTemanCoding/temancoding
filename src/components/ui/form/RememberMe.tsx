import Link from "next/link";

interface RememberMeProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RememberMe = ({ checked, onChange }: RememberMeProps) => (
  <div className="mb-4 flex items-center justify-between text-sm text-zinc-300">
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="accent-blue-500 w-4 h-4"
      />
      Remember me
    </label>
    <Link href="/reset-password" className="text-blue-400 hover:underline">
      Forgot password?
    </Link>
  </div>
);
