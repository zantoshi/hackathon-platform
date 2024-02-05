import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    const {
      query: { id },
    } = req;

    const project = await prisma.project.findMany({
      where:{
        hackathonId : id
      }
    });

    res.json(project);
  } catch (error) {
    console.log(error);
  }
}