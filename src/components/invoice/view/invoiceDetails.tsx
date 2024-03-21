import { Address, Currency, Invoice, InvoiceItem } from "@/data/types";
import { formatDate, formatPrice } from "@/utils";

export const InvoiceDetails: React.FC<{ invoice: Invoice }> = ({ invoice }) => {
  return (
    <div className="bg-white dark:bg-dark-blue-gray p-6 rounded-lg flex flex-col gap-8 shadow-md">
      <div className="flex flex-col gap-7 justify-start md:flex-row md:justify-between">
        <div>
          <h1 className="text-heading-s text-dark-navy dark:text-pale-lavender">
            <span className="text-light-slate-blue dark:text-pale-lavender">
              #
            </span>
            {invoice.id}
          </h1>
          <p className="text-body-variant text-light-slate-blue font-[600] dark:text-pale-lavender">
            {invoice.description}
          </p>
        </div>
        <DisplayAddress address={invoice.supplier.address} />
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:gap-36">
        <div className="flex gap-16 md:gap-36">
          <div className="flex flex-col gap-8">
            <DetailsInfo label="Invoice Date">
              <p className="text-heading-s text-dark-navy dark:text-pale-lavender">
                {formatDate(invoice.invoiceDate)}
              </p>
            </DetailsInfo>
            <DetailsInfo label="Payment Due">
              <p className="text-heading-s text-dark-navy dark:text-pale-lavender">
                {formatDate(invoice.paymentDue)}
              </p>
            </DetailsInfo>
          </div>
          <DetailsInfo label="Bill To">
            <div className="flex flex-col gap-2">
              <p className="text-heading-s text-dark-navy dark:text-pale-lavender">
                {invoice.client.name}
              </p>
              <DisplayAddress address={invoice.client.address} />
            </div>
          </DetailsInfo>
        </div>
        <DetailsInfo label="Sent to">
          <p className="text-heading-s text-dark-navy dark:text-pale-lavender">
            {invoice.client.email}
          </p>
        </DetailsInfo>
      </div>
      <InvoiceItems
        items={invoice.itemsApplied}
        totalPrice={invoice.amountDue}
      />
    </div>
  );
};

interface DetailsInfoProps {
  label: string;
  children: React.ReactNode;
}

const DetailsInfo: React.FC<DetailsInfoProps> = ({ label, children }) => {
  return (
    <div className="flex gap-2 flex-col">
      <label className="text-body-variant text-light-slate-blue font-[600]">
        {label}
      </label>
      {children}
    </div>
  );
};

const DisplayAddress: React.FC<{ address: Address }> = ({ address }) => {
  return (
    <div className="text-body-variant text-light-slate-blue font-[600] flex flex-col gap-2">
      <p>{address.streetAddress}</p>
      <p>{address.city}</p>
      <p>{address.postCode}</p>
      <p>{address.country}</p>
    </div>
  );
};

const InvoiceItems: React.FC<{ items: InvoiceItem[]; totalPrice: number }> = ({
  items,
  totalPrice,
}) => {
  return (
    <div>
      <div className="bg-[#F9FAFE] dark:bg-midnight-blue p-6 rounded-t-lg flex flex-col gap-4">
        {items.map((item: InvoiceItem) => {
          return (
            <div key={item.name} className="flex justify-between items-center">
              <div className="flex flex-col gap-1">
                <p className="text-dark-navy dark:text-white text-body font-[600]">
                  {item.name}
                </p>
                <p className="text-light-slate-blue text-body font-[600]">
                  {item.qty} x ${item.price}
                </p>
              </div>
              <p className="text-body-variant text-dark-navy dark:text-white font-[600]">
                {formatPrice(Currency.GBP, item.price * item.qty)}
              </p>
            </div>
          );
        })}
      </div>
      <div className="bg-shadow-navy dark:bg-dark-navy px-6 py-8 flex justify-between rounded-b-lg">
        <p className="text-white dark:text-pale-lavender text-body-variant">
          Amount Due
        </p>
        <h1 className="text-heading-m text-white dark:text-pale-lavender">
          {formatPrice(Currency.GBP, totalPrice)}
        </h1>
      </div>
    </div>
  );
};
