import prisma from '@/lib/db';
import { config } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);
    const {
      teamName,
      teamDescription,
      teamAvatarURL,
      teamMembers,
      colorAvatar,
    } = req.body;

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
      },
      where: {
        email: session.user.email,
      },
    });

    const result = await prisma.team.update({
      where: {
        id: id,
      },
      data: {
        name: teamName,
        description: teamDescription,
        teamAvatar: teamAvatarURL,
        teamMembers: teamMembers,
        colorAvatar: colorAvatar,
        creatorId: user[0].id,
      },
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
