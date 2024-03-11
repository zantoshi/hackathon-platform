import prisma from "@/lib/db";
import { config } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function handle(req, res){
  try{
    const session = await getServerSession(req, res, config);
    
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const {image} = req.body;
    
    const result = await prisma.user.update({
      where:{
        email: session.user.email,
      },
      data:{
        image:image
      }
    })
    console.log(result)
    res.json(result);
  }catch(error){
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}