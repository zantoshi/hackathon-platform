-- CreateTable
CREATE TABLE "HackathonSponsors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "hackathonId" TEXT NOT NULL,

    CONSTRAINT "HackathonSponsors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HackathonSponsors" ADD CONSTRAINT "HackathonSponsors_hackathonId_fkey" FOREIGN KEY ("hackathonId") REFERENCES "Hackathon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
