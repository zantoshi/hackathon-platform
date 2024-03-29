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

    const {
      query: { id },
    } = req;

    const assessProject = await prisma.judgeassessments.deleteMany({
      where: {
        projectId: id,
      },
    });

    const project = await prisma.project.delete({
      where: {
        id: id,
      },
    });

    res.json(project);
  } catch (error) {
    console.log(error);
  }
}
