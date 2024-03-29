import prisma from '@/lib/db';
import { config } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    if (!referer || !referer.startsWith('https://www.ghl.gg')) {
      return res.status(403).json({ error: 'Access Denied' });
    }

    const user = await prisma.user.findMany({
      select: {
        id: id,
      },
      where: {
        email: session.user.email,
      },
    });

    res.json(user[0]);
  } catch (error) {
    console.log(error);
  }
}
