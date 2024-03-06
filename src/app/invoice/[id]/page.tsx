import { GoBackButton } from "@/components/goBackButton";
import { InvoiceDetails } from "@/components/invoice/view/invoiceDetails";
import { InvoiceDetailsHeader } from "@/components/invoice/view/invoiceDetailsHeader";
import { Invoice, Status } from "@/data/types";

export default function InvoicePage() {
  return (
    <section className="bg-light-bg dark:bg-charcoal w-full dark:text-white flex flex-col md:items-center px-6 py-8 sm:px-12 sm:py-16 lg:px-0 lg:py-20">
      <div className="w-full max-w-[730px] mb-8">
        <GoBackButton />
      </div>
      <div className="flex flex-col w-full max-w-[730px] gap-y-8 sm:gap-y-13 lg:gap-y-16">
        <InvoiceDetailsHeader status={Status.PAID} />
        <InvoiceDetails />
      </div>
    </section>
  );
}
