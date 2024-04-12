import prisma from '@/lib/db';
import { config } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function handle(req, res) {
  try {
    const user = await prisma.user.findMany({
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
    });

    res.json(user);
  } catch (error) {
    console.log(error);
  }
}
