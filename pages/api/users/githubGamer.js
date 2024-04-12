import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { config } from "@/lib/auth";

export default async function handle(req, res) {
  try {
    const session = await getServerSession(req, res, config);

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verificar si el campo 'gamertag' está vacío
    if (!user.gamertag) {
      // Actualizar el campo 'gamertag' con el valor del campo 'name'
      const result = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          gamertag: user.name,
        },
        select :  {
          id: true,
          name: true,
          gamertag: true,
          role: true,
          emailVerified: true,
          image: true,
          isVerified: true,
          lightningAddress: true,
          publicBio: true,
          publicStaticCharge: true,
          social: true,
          balance: true,
          remainingAmountLimits: true,
          skill: true,
          location: true,
          availability: true
        }
      });

      return res.json(result);
    } else {
      return res.json({ message: "Gamertag already exists" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
