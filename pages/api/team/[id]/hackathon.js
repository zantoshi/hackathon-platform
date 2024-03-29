import prisma from '@/lib/db';
import { config } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);
    if (!referer || !referer.startsWith('https://www.ghl.gg')) {
      return res.status(403).json({ error: 'Access Denied' });
    }
    const {
      query: { id },
    } = req;

    const project = await prisma.team.findMany({
      where: {
        id: id,
      },
    });

    res.json(project);
  } catch (error) {
    console.log(error);
  }
}
