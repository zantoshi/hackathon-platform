import prisma from '@/lib/db';

export default async function handle(req, res) {
  try {
    const { name, email, company, comments } = req.body;
    const referer = req.headers.referer;
    if (!referer || !referer.startsWith('https://www.ghl.gg')) {
      return res.status(403).json({ error: 'Access Denied' });
    }
    const result = await prisma.contact.create({
      data: {
        name,
        email,
        company,
        comments,
      },
    });

    // Envía la respuesta después de crear el contacto
    res.json(result);
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
