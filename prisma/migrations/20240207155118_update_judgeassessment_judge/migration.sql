/*
  Warnings:

  - A unique constraint covering the columns `[projectId]` on the table `Judgeassessments` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Judge_userId_hackathonId_key";

-- DropIndex
DROP INDEX "Judgeassessments_hackathonId_projectId_judgeId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Judgeassessments_projectId_key" ON "Judgeassessments"("projectId");
