-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "supplierName" TEXT NOT NULL,
    "supplierEmail" TEXT NOT NULL,
    "supplierAddressStreetAddress" TEXT NOT NULL,
    "supplierAddressCity" TEXT NOT NULL,
    "supplierAddressPostCode" TEXT NOT NULL,
    "supplierAddressCountry" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "clientAddressStreetAddress" TEXT NOT NULL,
    "clientAddressCity" TEXT NOT NULL,
    "clientAddressPostCode" TEXT NOT NULL,
    "clientAddressCountry" TEXT NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL,
    "paymentTerms" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "itemsApplied" JSONB NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);
