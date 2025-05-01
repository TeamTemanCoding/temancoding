"use client";

import React from 'react';
import { HeroUIProvider } from '@heroui/react';
import { usePathname } from 'next/navigation';

import Footer from '~/components/layouts/footer/Footer';
import NavigationBar from '~/components/layouts/navbar/NavigationBar';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAuthPage = ["/sign-in", "/sign-up", "/reset-password"].includes(pathname); 
  const isAdminPage = pathname.startsWith("/admin");

  const shouldHideLayout = isAuthPage || isAdminPage;

  return (
    <HeroUIProvider>
      {!shouldHideLayout && <NavigationBar />}
      <main>{children}</main>
      {!shouldHideLayout && <Footer />}
    </HeroUIProvider>
  );
};

export default Provider;
