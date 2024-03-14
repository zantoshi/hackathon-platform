
import Header from "./Header";
import Footer from "./Footer";
import type { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export default function Layout({
  children,
  session,
}: {
  children: ReactNode;
  session?: any;
}) {
  return (
    <SessionProvider session={session}>
      <div className=" bg-gray-950 items-center justify-center  text-white min-h-screen ">
        <Header />
        <main className="flex flex-1 w-full flex-col items-center justify-center md:px-4 my-10">
          {children}
        </main>
        <Footer />
      </div>
    </SessionProvider>
  );
}
