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

    const { sponsorName, sponsorEmail, sponsorImage } = req.body;

    const result = await prisma.hackathonSponsors.update({
      where: {
        id: id,
      },
      data: {
        name: sponsorName,
        email: sponsorEmail,
        image: sponsorImage,
      },
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
