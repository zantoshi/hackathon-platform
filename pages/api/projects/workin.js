import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const result = await prisma.hackathon.findFirst({
      where: {
       id: id,
      },
    });

    const project = await prisma.project.findMany({
      where: {
        hackathonid:result
      },
    });

    res.json(project[0]);
  } catch (error) {
    console.log(error);
  }
}
