/*
  Warnings:

  - Added the required column `colorAvatar` to the `Team` table .

*/
-- AlterTable
ALTER TABLE "Team" ADD COLUMN "colorAvatar" TEXT DEFAULT '#FFFFFF';