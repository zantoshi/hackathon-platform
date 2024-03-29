import prisma from '@/lib/db';
import { config } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function handle(req, res) {
  const session = await getServerSession(req, res, config);
  const referer = req.headers.referer;
  if (!referer || !referer.startsWith('https://www.ghl.gg')) {
    return res.status(403).json({ error: 'Access Denied' });
  }
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  //
  const {
    query: { id },
  } = req;
  if (!id) {
    return res.status(400).json({ error: 'Id for the project is missing' });
  }

  const {
    projectName,
    projectDescription,
    loomLink,
    pitchLink,
    projectResourceLink,
    comments,
    htId,
  } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!htId) {
    return res.status(400).json({ error: 'Hackathon ID is required' });
  }

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const teams = await prisma.team.findMany({
    where: {
      creatorId: user.id,
    },
  });

  //getting the current date
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split('T')[0];

  const hackathon = await prisma.hackathon.findFirst({
    where: {
      id: htId,
    },
  });

  if (!hackathon) {
    return res.status(404).json({ error: 'Hackathon not found' });
  }

  if (formattedCurrentDate <= hackathon.endDate) {
    // Input Validation
    if (!projectName || !projectDescription) {
      return res
        .status(400)
        .json({ error: 'Project name and description are required' });
    }

    try {
      const result = await prisma.project.update({
        where: {
          id: id,
        },
        data: {
          name: projectName,
          description: projectDescription,
          loomLink: loomLink || null,
          pitchLink: pitchLink || null,
          projectResourceLink: projectResourceLink || null,
          comments: comments || null,
        },
      });

      return res.json(result);
    } catch (error) {
      console.error('Error creating project:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(404).json({ error: 'Registration not found' });
}
