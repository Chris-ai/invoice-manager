/*
  Warnings:

  - You are about to drop the column `creationDate` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `paymentTerms` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `amountDue` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoiceDate` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentDue` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "creationDate",
DROP COLUMN "paymentTerms",
ADD COLUMN     "amountDue" INTEGER NOT NULL,
ADD COLUMN     "invoiceDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "paymentDue" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL;
