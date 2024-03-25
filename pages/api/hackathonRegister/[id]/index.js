import prisma from "@/lib/db";

export default async function handle(req, res) {
  try {
   
    const {
      query: { id },
    } = req;

    const result = await prisma.hackathonRegistration.findMany({
      where : {
        hackathonId:id
      }
    });
    res.json(result);
  } catch (error) {
    console.log(error);
  }
}
