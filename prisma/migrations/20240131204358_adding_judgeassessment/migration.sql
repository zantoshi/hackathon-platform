-- CreateTable
CREATE TABLE "Judgeassessments" (
    "id" TEXT NOT NULL,
    "impact" INTEGER NOT NULL,
    "feasability" INTEGER NOT NULL,
    "user_experience" INTEGER NOT NULL,
    "scalability" INTEGER NOT NULL,
    "innovate" INTEGER NOT NULL,
    "pitch" INTEGER NOT NULL,
    "overall_score" DECIMAL(65,30) NOT NULL,
    "hackathonId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "judgeId" TEXT NOT NULL,

    CONSTRAINT "Judgeassessments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Judgeassessments_hackathonId_projectId_judgeId_key" ON "Judgeassessments"("hackathonId", "projectId", "judgeId");

-- AddForeignKey
ALTER TABLE "Judgeassessments" ADD CONSTRAINT "Judgeassessments_hackathonId_fkey" FOREIGN KEY ("hackathonId") REFERENCES "Hackathon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Judgeassessments" ADD CONSTRAINT "Judgeassessments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Judgeassessments" ADD CONSTRAINT "Judgeassessments_judgeId_fkey" FOREIGN KEY ("judgeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
