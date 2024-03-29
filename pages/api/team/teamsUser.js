import prisma from '@/lib/db';
import { config } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

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
        email: session.user.email,
      },
    });

    const result = await prisma.teamMembers.findMany({
      where: {
        userId: user[0].id,
      },
    });

    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
