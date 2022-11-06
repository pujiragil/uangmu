import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";

export interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children } : LayoutProps) {
  return (
    <main>
      <Head>
        <title>Uangmu - Kalau bisa nyolong kenapa engga ?</title>
      </Head>

      <Navbar />
      {children}
    </main>
  )
}