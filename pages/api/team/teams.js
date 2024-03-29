import prisma from '@/lib/db';
import { config } from '@/lib/auth';
import { getServerSession } from 'next-auth';

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    const result = await prisma.team.findMany({});

    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
