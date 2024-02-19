import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);
    const { teamId, teamName, UserReciever } = req.body;

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await prisma.user.findMany({
      where: {
        email: session.user.email,
      },
    });

    const result = await prisma.teamRequest.create({
      data: {
        teamId,
        teamName,
        userSender: user[0].id,
        userSenderName: user[0].gamertag,
        UserReciever
      },
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
