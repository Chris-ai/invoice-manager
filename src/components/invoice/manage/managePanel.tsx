import { AddNewInvoiceButton } from "./addNewInvoiceButton";
import { FiltersSelect } from "./filtersSelect";
import { Header } from "./header";

export const ManagePanel = () => {
  return (
    <div className="flex justify-between items-center">
      <Header length={0} />
      <div className="flex gap-5">
        <FiltersSelect />
        <AddNewInvoiceButton />
      </div>
    </div>
  );
};
