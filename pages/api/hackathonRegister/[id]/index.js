import prisma from '@/lib/db';

export default async function handle(req, res) {
  try {
    const referer = req.headers.referer;
    if (!referer || !referer.startsWith('https://www.ghl.gg')) {
      return res.status(403).json({ error: 'Access Denied' });
    }
    const {
      query: { id },
    } = req;

    const result = await prisma.hackathonRegistration.findMany({
      where: {
        hackathonId: id,
      },
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
