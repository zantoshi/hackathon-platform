/*
  Warnings:

  - A unique constraint covering the columns `[id,gamertag,email,image]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `judgeImage` to the `Judge` table without a default value. This is not possible if the table is not empty.
  - Made the column `image` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Judge" DROP CONSTRAINT "Judge_userId_judgeGamertag_email_fkey";

-- DropIndex
DROP INDEX "User_id_gamertag_email_key";

-- AlterTable
ALTER TABLE "Judge" ADD COLUMN     "judgeImage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "image" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_id_gamertag_email_image_key" ON "User"("id", "gamertag", "email", "image");

-- AddForeignKey
ALTER TABLE "Judge" ADD CONSTRAINT "Judge_userId_judgeGamertag_email_judgeImage_fkey" FOREIGN KEY ("userId", "judgeGamertag", "email", "judgeImage") REFERENCES "User"("id", "gamertag", "email", "image") ON DELETE RESTRICT ON UPDATE CASCADE;
