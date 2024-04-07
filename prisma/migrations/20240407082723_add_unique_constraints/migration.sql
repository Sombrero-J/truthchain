/*
  Warnings:

  - A unique constraint covering the columns `[address]` on the table `Author` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Author_address_key" ON "Author"("address");
