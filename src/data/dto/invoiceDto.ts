import { Status, InvoiceItem, Invoice } from "../types";

export type InvoiceDTO = {
  id: number;
  supplierName: string;
  supplierEmail: string;
  supplierAddressStreetAddress: string;
  supplierAddressCity: string;
  supplierAddressPostCode: string;
  supplierAddressCountry: string;
  clientName: string;
  clientEmail: string;
  clientAddressStreetAddress: string;
  clientAddressCity: string;
  clientAddressPostCode: string;
  clientAddressCountry: string;
  invoiceDate: Date;
  paymentDue: Date;
  status: Status;
  amountDue: number;
  description: string;
  itemsApplied: InvoiceItem[];
};

export const fromJson = (invoiceDto: InvoiceDTO): Invoice => {
  return {
    id: invoiceDto.id,
    supplier: {
      address: {
        streetAddress: invoiceDto.supplierAddressStreetAddress,
        city: invoiceDto.supplierAddressCity,
        postCode: invoiceDto.supplierAddressPostCode,
        country: invoiceDto.supplierAddressCountry,
      },
    },
    client: {
      name: invoiceDto.clientName,
      email: invoiceDto.clientEmail,
      address: {
        streetAddress: invoiceDto.clientAddressStreetAddress,
        city: invoiceDto.clientAddressCity,
        postCode: invoiceDto.clientAddressPostCode,
        country: invoiceDto.clientAddressCountry,
      },
    },
    invoiceDate: invoiceDto.invoiceDate,
    paymentDue: invoiceDto.paymentDue,
    description: invoiceDto.description,
    status: invoiceDto.status,
    amountDue: invoiceDto.amountDue,
    itemsApplied: invoiceDto.itemsApplied,
  };
};
