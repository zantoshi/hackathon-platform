import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    const {
      query: { id },
    } = req;

    const team = await prisma.hackathonRegistration.findFirst({
      where: {
        id: id
      }
    });

    if (!team) {
      return res.status(404).json({ error: "Hackathon registration not found" });
    }

    const project = await prisma.project.findFirst({
      where: {
        teamId: team.teamId,
        hackathonId: team.hackathonId
      }
    });

    if (project && project.id) { // Check if project exists and id is not null
      // Delete judge assessments associated with the project
      await prisma.judgeassessments.deleteMany({
        where: {
          projectId: project.id
        }
      });

      // Delete the project
      await prisma.project.delete({
        where: {
          id: project.id
        }
      });
    }

    // Delete the hackathon registration
    const deletedRegistration = await prisma.hackathonRegistration.delete({
      where: {
        id: id
      }
    });
    if (project && project.id) {
      res.json(project)
    }else{
      res.json(deletedRegistration);
    }
   
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
