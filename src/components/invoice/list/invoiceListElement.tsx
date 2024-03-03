import { pages } from "@/app/pages";
import { ArrowRight } from "@/components/icons/arrowRight";
import { StatusLabel } from "@/components/status";
import { Currency, Invoice, Status } from "@/data/types";
import { formatPrice } from "@/utils";
import Link from "next/link";

export const InvoiceListElement: React.FC<{ invoice: Invoice }> = ({
  invoice,
}) => {
  return (
    <>
      <MobileListElement
        id={invoice.id}
        name={invoice.client.name}
        paymentDue={invoice.paymentDue.toLocaleDateString()}
        amountDue={invoice.amountDue}
        status={invoice.status}
      />
      <DesktopListElement
        id={invoice.id}
        name={invoice.client.name}
        paymentDue={invoice.paymentDue.toLocaleDateString()}
        amountDue={invoice.amountDue}
        status={invoice.status}
      />
    </>
  );
};

interface InvoiceListElement {
  id: number;
  name: string;
  paymentDue: string;
  amountDue: number;
  status: Status;
}

export const MobileListElement: React.FC<InvoiceListElement> = ({
  id,
  name,
  paymentDue,
  amountDue,
  status,
}) => {
  return (
    <Link href={pages.invoice(id)}>
      <div className="flex flex-col gap-6 p-6 dark:bg-dark-blue-gray bg-transparent shadow-lg rounded-lg md:hidden">
        <div className="flex justify-between items-center">
          <p>{id}</p>
          <p>{name}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p>Due {paymentDue}</p>
            <p className="text-heading-s">
              {formatPrice(Currency.GBP, amountDue)}
            </p>
          </div>
          <StatusLabel status={status} />
        </div>
      </div>
    </Link>
  );
};

export const DesktopListElement: React.FC<InvoiceListElement> = ({
  id,
  name,
  paymentDue,
  amountDue,
  status,
}) => {
  return (
    <div className="gap-6 p-4 dark:bg-dark-blue-gray bg-transparent shadow-lg rounded-lg hidden md:flex justify-between items-center">
      <p>{id}</p>
      <p>Due {paymentDue}</p>
      <p>{name}</p>
      <p className="text-heading-s text-end">
        {formatPrice(Currency.GBP, amountDue)}
      </p>
      <StatusLabel status={status} />
      <Link href={pages.invoice(id)}>
        <ArrowRight />
      </Link>
    </div>
  );
};
