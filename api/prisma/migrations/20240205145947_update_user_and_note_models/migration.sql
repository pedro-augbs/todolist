/*
  Warnings:

  - A unique constraint covering the columns `[noteId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `noteId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "noteId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_noteId_key" ON "User"("noteId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Note"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
