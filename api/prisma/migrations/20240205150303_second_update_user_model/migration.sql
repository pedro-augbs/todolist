-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_noteId_fkey";

-- DropIndex
DROP INDEX "User_noteId_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "noteId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Note"("id") ON DELETE SET NULL ON UPDATE CASCADE;
