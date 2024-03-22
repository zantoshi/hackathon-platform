import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions as NextAuthConfig } from "next-auth";
import { getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./db";
import { getZBDProvider } from "next-auth-zbd-provider";
import GithubProvider from "next-auth/providers/github";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation
declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    userRole?: "admin";
  }
}

const zbdConfig = getZBDProvider({
  clientId: process.env.AUTH_ZBD_ID,
  clientSecret: process.env.AUTH_ZBD_SECRET,
  apiKey: process.env.AUTH_ZBD_LIVE_KEY,
  scope: "user,wallet",
});

const githubConfig = GithubProvider({
  clientId: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET,
});

export const config = {
  adapter: PrismaAdapter(prisma) as any,
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  providers: [zbdConfig, githubConfig],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
    
  },
} satisfies NextAuthConfig;

// Helper function to get session without passing config every time
// https://next-auth.js.org/configuration/nextjs#getserversession
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}

// We recommend doing your own environment variable validation
declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXTAUTH_SECRET: string;
      GITHUB_ID: string;
      GITHUB_SECRET: string;
      AUTH_ZBD_ID: string;
      AUTH_ZBD_SECRET: string;
      AUTH_ZBD_LIVE_KEY: string;
    }
  }
}

