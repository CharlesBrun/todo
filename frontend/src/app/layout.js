import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Design from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tarefas",
  description: "Listagem de tarefas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry AntdRegistry>
          <Design>{children}</Design>
        </AntdRegistry>  
      </body>
    </html>
  );
}


