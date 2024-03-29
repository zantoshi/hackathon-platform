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
    const {
      query: { id },
    } = req;

    const details = await prisma.hackathonSponsors.delete({
      where: {
        id: id,
      },
    });

    res.json(details);
  } catch (error) {
    console.log(error);
  }
}
