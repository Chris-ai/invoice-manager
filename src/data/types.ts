export type Invoice = {
  id: number;
  supplier: {
    address: Address;
  };
  client: {
    name: string;
    email: string;
    address: Address;
  };
  invoiceDate: Date;
  paymentDue: Date;
  description: string;
  status: Status;
  amountDue: number;
  itemsApplied: InvoiceItem[];
};

type Address = {
  streetAddress: string;
  city: string;
  postCode: string;
  country: string;
};

export type InvoiceItem = {
  name: string;
  qty: number;
  price: number;
};

export enum Status {
  DRAFT = "Draft",
  PENDING = "Pending",
  PAID = "Paid",
}

export enum Currency {
  USD = "$",
  GBP = "£",
  PLN = "PLN",
}
