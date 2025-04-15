interface AuthTitleProps {
    title: string;
    subtitle: string;
  }
  
  export const AuthTitle = ({ title, subtitle }: AuthTitleProps) => (
    <div className="text-center max-w-md w-full mb-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-[1.5px] text-transparent bg-clip-text bg-gradient-to-r from-[#474FDD] via-[#3773DA] to-[#08BCE9]">
        {title}
      </h1>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
  