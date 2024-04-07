-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_content_id_fkey";

-- DropForeignKey
ALTER TABLE "References" DROP CONSTRAINT "References_content_id_fkey";

-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "thumbnailImg" TEXT;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "References" ADD CONSTRAINT "References_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;
