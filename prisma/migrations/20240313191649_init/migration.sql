-- CreateTable
CREATE TABLE "Mentor" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mentorGamertag" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mentorImage" TEXT NOT NULL,
    "hackathonId" TEXT NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_userId_mentorGamertag_email_mentorImage_fkey" FOREIGN KEY ("userId", "mentorGamertag", "email", "mentorImage") REFERENCES "User"("id", "gamertag", "email", "image") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mentor" ADD CONSTRAINT "Mentor_hackathonId_fkey" FOREIGN KEY ("hackathonId") REFERENCES "Hackathon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
