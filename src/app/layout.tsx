import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "../libs/LayoutProvider";


const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teman Coding",
  description: "Your Web Solution Partner",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased h-auto`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
