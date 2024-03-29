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

    const { teamId, teamName, userReceiver } = req.body;

    const user = await prisma.user.findFirst({
      select: {
        id: id,
      },
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const validateMembers = await prisma.teamMembers.findMany({
      where: {
        teamId,
        userId: userReceiver,
      },
    });

    const validateRequest = await prisma.teamRequest.findMany({
      where: {
        teamId,
        userReceiver,
      },
    });

    if (validateMembers.length === 0 && validateRequest.length === 0) {
      const result = await prisma.teamRequest.create({
        data: {
          teamId,
          teamName,
          userSender: user.id,
          userSenderName: user.gamertag,
          userReceiver,
          state: true,
        },
      });
      return res.json(result);
    }

    return res.status(400).json({
      error:
        'Either these individuals are already on the team or their application has been submitted.',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
