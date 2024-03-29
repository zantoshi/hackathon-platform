import prisma from '@/lib/db';
import { config } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);
    const referer = req.headers.referer;

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = await prisma.user.findUnique({
      select: {
        id: true,
        gamertag: true,
        image: true,
        name: true,
        lightningAddress: true,
        social: true,
        location: true,
        skill: true,
        availability: true,
      },
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const {
      query: { id },
    } = req;

    if (!id) {
      return res.status(400).json({ error: 'Hackathon ID is required' });
    }

    const judges = await prisma.judge.findMany({
      where: {
        userId: user.id,
      },
    });

    const allJudgeAssessments = [];

    for (const judge of judges) {
      const judgeAssessments = await prisma.judgeassessments.findMany({
        where: {
          judgeId: judge.id,
          hackathonId: id,
        },
      });
      allJudgeAssessments.push(...judgeAssessments);
    }

    // if (judgeAssessments.length === 0) {
    //   return res.status(404).json({ error: "No assessments found for this judge and hackathon" });
    // }

    res.json(allJudgeAssessments);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
