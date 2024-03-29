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

    const user = await prisma.user.findMany({
      select: {
        id: id,
        gamertag: gamertag,
      },
      where: {
        availability: true,
      },
    });

    res.json(user);
  } catch (error) {
    console.log(error);
  }
}
