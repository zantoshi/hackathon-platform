import prisma from '@/lib/db';
import { config } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const result = await prisma.judge.findMany({
      select: {
        id: true,
        userId: true,
        judgeGamertag: true,
        judgeImage: true,
        hackathonId: true,
      },
      where: {
        email: session.user.email,
      },
    });

    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
