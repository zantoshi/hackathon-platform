import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    const {
      query: { id },
    } = req;

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      }
    });

    const teams = await prisma.team.findMany({
      where: {
        creatorId: user.id
      }
    });

    const projects = [];

    for (const team of teams) {
      const project = await prisma.project.findMany({
        where: {
          hackathonId: id,
          teamId: team.id
        }
      });

      if (project.length > 0) {
        projects.push(...project);
      }
    }

    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
