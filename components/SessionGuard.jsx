import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function SessionGuard({ children }) {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push("/");
    }
  }, [loading, session]);

  return <>{children}</>; // Renderiza los hijos solo si hay sesión activa
}

export default SessionGuard;