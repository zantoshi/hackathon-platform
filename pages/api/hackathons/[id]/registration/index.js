import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    console.log(req);

    // hackathonId
    const {
      query: { id, teams },
    } = req;
    console.log(teams);

    const result = await prisma.hackathonregistration.findUnique({
      where: {
        hackathonId: id,
        team: teams,
      },
    });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
