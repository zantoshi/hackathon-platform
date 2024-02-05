import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await prisma.judge.findMany({
      where: {
        email: session.user.email,
      },
    });

    res.json(result);
  } catch (error) {
    console.log(error);
  }
}