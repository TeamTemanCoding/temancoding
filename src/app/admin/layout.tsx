import { Outfit } from 'next/font/google';
import './globals_cleaned_final.css';
// import './globals.css';

import { SidebarProvider } from '~/context/admin/SidebarContext';
import { ThemeProvider } from '~/context/admin/ThemeContext';
import { AuthProvider } from '~/context/admin/AuthContext';

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <AuthProvider>
          <ThemeProvider>
            <SidebarProvider>
              {children}
            </SidebarProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
