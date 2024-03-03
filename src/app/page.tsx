import { InvoiceList } from "@/components/invoice/list/invoiceList";
import { ManagePanel } from "@/components/invoice/manage/managePanel";
import { fetchInvoices } from "@/data/queries";
import { Invoice } from "@/data/types";
import { Suspense } from "react";

export default async function Home() {
  const invoices: Invoice[] = await fetchInvoices();

  return (
    <section className="bg-light-bg dark:bg-charcoal h-full w-full dark:text-white flex flex-col md:items-center px-6 py-8 sm:px-12 sm:py-16 lg:px-0 lg:py-20">
      <div className="flex flex-col w-full max-w-[730px] gap-y-8 sm:gap-y-13 lg:gap-y-16">
        <ManagePanel invoicesCount={invoices.length} />
        <Suspense fallback={<div>Loading...</div>}>
          <InvoiceList invoices={invoices} />
        </Suspense>
      </div>
    </section>
  );
}
