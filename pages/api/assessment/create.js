import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const judge = await prisma.judge.findMany({
      where: {
        email: session.user.email,
      },
    });

    const {
      impact,
      feasability,
      user_experience,
      scalability,
      innovate,
      pitch,
      hackathonId,
      projectId,
      overall_score
    } = req.body;

    const result = await prisma.judgeassessments.create({
      data: {
        impact,
        feasability,
        user_experience,
        scalability,
        innovate,
        pitch,
        hackathonId,
        projectId,
        judgeId: judge[0].id,
        overall_score
      },
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
