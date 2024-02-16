/*
  Warnings:

  - You are about to drop the column `teamMembers` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "teamMembers";

-- CreateTable
CREATE TABLE "teamMembers" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "teamMembers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teamRequest" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "teamName" TEXT NOT NULL,
    "userSender" TEXT NOT NULL,
    "userSenderName" TEXT NOT NULL,
    "userReceiver" TEXT,
    "state" BOOLEAN NOT NULL,

    CONSTRAINT "teamRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "teamMembers" ADD CONSTRAINT "teamMembers_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teamMembers" ADD CONSTRAINT "teamMembers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teamRequest" ADD CONSTRAINT "teamRequest_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teamRequest" ADD CONSTRAINT "teamRequest_userSender_fkey" FOREIGN KEY ("userSender") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
