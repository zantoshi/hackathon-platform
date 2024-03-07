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

    const assessment = await prisma.judgeassessments.findMany({
      where:{
        hackathonId,
        projectId,
        judgeId: judge[0].id
      }
    })

    if(assessment.length){
      return res.status(409).json({message:"you already score this project"})
    }

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
   return res.json(result);
  } catch (error) {
    console.log(error);
  }
}
