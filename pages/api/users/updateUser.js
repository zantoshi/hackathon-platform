import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const {skill,publicBio,location,github,twitter,linkedin} = req.body

    const user = await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data:{
        skill,
        publicBio,
        location,
        social:{
          github,
          twitter,
          linkedin
        }
      }
    });

    res.json(user);
  } catch (error) {
    console.log(error);
  }
}
