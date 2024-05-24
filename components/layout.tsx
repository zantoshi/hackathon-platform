"use client";
import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";

export default function Layout({
  children,
  session,
}: {
  children: ReactNode;
  session?: any;
}) {
  return (
    <SessionProvider session={session}>
      <div className=" bg-gray-950  text-white min-h-screen ">
        <Suspense fallback={<div>Cargando...</div>}>
          <Header />
        </Suspense>
        <main className="flex flex-1 w-full flex-col my-10">{children}</main>
        <Footer />
      </div>
    </SessionProvider>
  );
}
