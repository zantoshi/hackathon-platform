import prisma from '@/lib/db';
import { config } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const {
      query: { id },
    } = req;

    const user = await prisma.user.findMany({
      select: {
        id: id,
        gamertag: gamertag,
        image: image,
        name: name,
        lightningAddress: lightningAddress,
        social: social,
        location: location,
        skill: skill,
        availability: availability,
      },
      where: {
        id: id,
      },
    });

    const result = await prisma.team.findMany({
      where: {
        creatorId: user[0].id,
      },
    });

    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
