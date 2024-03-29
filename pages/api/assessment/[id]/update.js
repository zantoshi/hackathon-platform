import prisma from '@/lib/db';
import { config } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);
    const referer = req.headers.referer;
    if (!referer || !referer.startsWith('https://www.ghl.gg')) {
      return res.status(403).json({ error: 'Access Denied' });
    }

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const {
      query: { id },
    } = req;

    const {
      impact,
      feasability,
      user_experience,
      scalability,
      innovate,
      pitch,
      overall_score,
    } = req.body;

    const result = await prisma.judgeassessments.update({
      where: {
        id: id,
      },
      data: {
        impact: impact,
        feasability: feasability,
        user_experience: user_experience,
        scalability: scalability,
        innovate: innovate,
        pitch: pitch,
        overall_score: overall_score,
      },
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
