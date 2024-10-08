import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./AntdRegistry";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <AntdRegistry>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </AntdRegistry>
  );
}

export default RootLayout;
