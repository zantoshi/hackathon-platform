import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const {
      userId,
      judgeGamertag,
      email,
      judgeImage,
      hackathonId
    } = req.body;

    const existingJudge = await prisma.judge.findFirst({
      where: {
        userId: userId,
        hackathonId: hackathonId
      },
    });

    if (existingJudge) {
      return res.status(400).json({ error: "A judge with the same userId already exists for this hackathon." });
    }

    const result = await prisma.judge.create({
      data: {
      userId:userId,
      judgeGamertag,
      email,
      judgeImage,
      hackathonId:hackathonId
      },
    });
    res.json(result);
    
  } catch (error) {
    console.log(error);
  }
}
