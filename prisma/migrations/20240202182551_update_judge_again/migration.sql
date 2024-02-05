/*
  Warnings:

  - You are about to drop the `_JudgeToJudgeassessments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Judgeassessments" DROP CONSTRAINT "Judgeassessments_judgeId_fkey";

-- DropForeignKey
ALTER TABLE "_JudgeToJudgeassessments" DROP CONSTRAINT "_JudgeToJudgeassessments_A_fkey";

-- DropForeignKey
ALTER TABLE "_JudgeToJudgeassessments" DROP CONSTRAINT "_JudgeToJudgeassessments_B_fkey";

-- DropTable
DROP TABLE "_JudgeToJudgeassessments";

-- AddForeignKey
ALTER TABLE "Judgeassessments" ADD CONSTRAINT "Judgeassessments_judgeId_fkey" FOREIGN KEY ("judgeId") REFERENCES "Judge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
