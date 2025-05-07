"use client";

import React from "react";
import { HeroUIProvider } from "@heroui/react";
import { usePathname } from "next/navigation";

import Footer from "~/components/layouts/footer/Footer";
import NavigationBar from "~/components/layouts/navbar/NavigationBar";
import SidebarUser from "~/components/layouts/sidebar/SidebarUser";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isAuthPage = ["/sign-in", "/sign-up", "/reset-password"].includes(pathname);
  const isUserPage = pathname.startsWith("/user");

  return (
    <HeroUIProvider>
      {!isAuthPage && !isUserPage && <NavigationBar />}

      {isUserPage ? (
        <SidebarUser>
          <main>{children}</main>
        </SidebarUser>
      ) : (
        <main>{children}</main>
      )}

      {!isAuthPage && !isUserPage && <Footer />}
    </HeroUIProvider>
  );
};

export default Provider;
