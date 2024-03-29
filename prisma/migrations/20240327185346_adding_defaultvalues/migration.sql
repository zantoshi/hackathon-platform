/*
  Warnings:

  - Made the column `colorAvatar` on table `Team` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Team" ALTER COLUMN "colorAvatar" SET DEFAULT '#FFFFFF',
ALTER COLUMN "colorAvatar" SET NOT NULL;
