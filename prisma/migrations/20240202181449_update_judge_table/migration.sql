/*
  Warnings:

  - The values [JUDGE] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[id,gamertag,email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('USER', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'USER';
COMMIT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET NOT NULL;

-- CreateTable
CREATE TABLE "Judge" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "judgeGamertag" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hackathonId" TEXT NOT NULL,

    CONSTRAINT "Judge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_JudgeToJudgeassessments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Judge_userId_key" ON "Judge"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Judge_userId_hackathonId_key" ON "Judge"("userId", "hackathonId");

-- CreateIndex
CREATE UNIQUE INDEX "_JudgeToJudgeassessments_AB_unique" ON "_JudgeToJudgeassessments"("A", "B");

-- CreateIndex
CREATE INDEX "_JudgeToJudgeassessments_B_index" ON "_JudgeToJudgeassessments"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_gamertag_email_key" ON "User"("id", "gamertag", "email");

-- AddForeignKey
ALTER TABLE "Judge" ADD CONSTRAINT "Judge_userId_judgeGamertag_email_fkey" FOREIGN KEY ("userId", "judgeGamertag", "email") REFERENCES "User"("id", "gamertag", "email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Judge" ADD CONSTRAINT "Judge_hackathonId_fkey" FOREIGN KEY ("hackathonId") REFERENCES "Hackathon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JudgeToJudgeassessments" ADD CONSTRAINT "_JudgeToJudgeassessments_A_fkey" FOREIGN KEY ("A") REFERENCES "Judge"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JudgeToJudgeassessments" ADD CONSTRAINT "_JudgeToJudgeassessments_B_fkey" FOREIGN KEY ("B") REFERENCES "Judgeassessments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
