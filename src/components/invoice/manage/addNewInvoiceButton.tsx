import { PlusIcon } from "@/components/icons/plus";

export const AddNewInvoiceButton = () => {
  return (
    //TODO:: Open an add/edit invoice form on click
    <button className="bg-primary p-1.5 pr-3 flex items-center justify-center rounded-full gap-2">
      <div className="rounded-full p-3 bg-white grid place-items-center">
        <PlusIcon />
      </div>
      <div className="flex h-full items-center text-white text-heading-s-variant pt-1">
        New
      </div>
    </button>
  );
};
