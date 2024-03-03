import { Invoice } from "@/data/types";
import { EmptyList } from "./emptyList";
import { InvoiceListElement } from "./invoiceListElement";

export const InvoiceList: React.FC<{ invoices: Invoice[] }> = ({
  invoices,
}) => {
  if (invoices.length === 0) return <EmptyList />;

  return (
    <div className="flex flex-col gap-4">
      {invoices.map((invoice: Invoice) => (
        <InvoiceListElement key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};
