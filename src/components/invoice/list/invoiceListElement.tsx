import { pages } from "@/app/pages";
import { ArrowRight } from "@/components/icons/arrowRight";
import { StatusLabel } from "@/components/status";
import { Currency, Invoice, Status } from "@/data/types";
import { formatDate, formatPrice } from "@/utils";
import Link from "next/link";

export const InvoiceListElement: React.FC<{ invoice: Invoice }> = ({
  invoice,
}) => {
  return (
    <>
      <MobileListElement
        id={invoice.id}
        name={invoice.client.name}
        paymentDue={invoice.paymentDue}
        amountDue={invoice.amountDue}
        status={invoice.status}
      />
      <DesktopListElement
        id={invoice.id}
        name={invoice.client.name}
        paymentDue={invoice.paymentDue}
        amountDue={invoice.amountDue}
        status={invoice.status}
      />
    </>
  );
};

interface InvoiceListElement {
  id: number;
  name: string;
  paymentDue: Date;
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
      <div className="flex flex-col gap-6 p-6 dark:bg-dark-blue-gray bg-transparent shadow-sm rounded-lg md:hidden">
        <div className="flex justify-between items-center">
          <p className="text-heading-s">#{id}</p>
          <p className="text-light-slate-blue darK:pale-lavender text-body-variant">
            {name}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-light-slate-blue darK:pale-lavender text-body-variant">
              Due {formatDate(paymentDue)}
            </p>
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
    <Link href={pages.invoice(id)} className="group">
      <div className="gap-6 p-4 dark:bg-dark-blue-gray bg-transparent shadow-sm rounded-lg hidden md:flex justify-between items-center border border-transparent group-active:border-primary">
        <p className="text-heading-s">#{id}</p>
        <p className="text-light-slate-blue darK:pale-lavender text-body-variant flex-1">
          Due {formatDate(paymentDue)}
        </p>
        <p className="text-light-slate-blue dark:pale-lavender text-body-variant flex-1">
          {name}
        </p>
        <p className="text-heading-s text-end flex-1 pr-4">
          {formatPrice(Currency.GBP, amountDue)}
        </p>
        <div className="flex-1">
          <StatusLabel status={status} />
        </div>
        <ArrowRight />
      </div>{" "}
    </Link>
  );
};
