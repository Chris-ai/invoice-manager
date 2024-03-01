import { Invoice } from "@/data/types";
import { EmptyList } from "./emptyList";

export const InvoiceList: React.FC<{ invoices: Invoice[] }> = ({
  invoices,
}) => {
  if (invoices.length === 0) return <EmptyList />;

  return <div>LSIT</div>;
};
