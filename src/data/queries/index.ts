import { db } from "@/data/index";
import { InvoiceDTO, fromJson } from "../dto/invoiceDto";
import { Invoice } from "../types";

export const fetchInvoices = async (): Promise<Invoice[]> => {
  const response: InvoiceDTO[] = await db.invoice.findMany();
  return response.map((res: InvoiceDTO) => fromJson(res));
};
