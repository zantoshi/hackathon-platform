import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res) {
  if(req.method === "GET"){
    try{
      const session = await getServerSession(req, res, config);

      // if (!session) {
      //   return res.status(401).json({ error: "Unauthorized" });
      // }

      // hackathonId
      const {
        query: { id },
      } = req;

      const result = await prisma.teamMembers.findMany({
        where: {
         teamId: id,
        },
      });
      res.json(result);
    }catch(error){
      console.log(error);
    }
  }
}