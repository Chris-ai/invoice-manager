import { PlusIcon } from "@/components/icons/plus";

export const AddNewInvoiceButton = () => {
  return (
    //TODO:: Open an add/edit invoice form on click
    <button className="bg-primary p-1.5 pr-3 flex items-center justify-center rounded-full gap-2 sm:gap-4">
      <div className="rounded-full p-3 bg-white grid place-items-center">
        <PlusIcon />
      </div>
      <div className="flex h-full items-center text-white text-heading-s-variant">
        <ButtonTitle />
      </div>
    </button>
  );
};

const ButtonTitle = () => {
  return (
    <>
      <p className="hidden sm:block">New Invoice</p>
      <p className="sm:hidden">New</p>
    </>
  );
};
