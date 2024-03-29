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

    const {
      query: { id },
    } = req;

    const score = await prisma.judgeassessments.findFirst({
      where: {
        id: id,
      },
    });

    res.json(score);
  } catch (error) {
    console.log(error);
  }
}
