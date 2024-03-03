import { AddNewInvoiceButton } from "./addNewInvoiceButton";
import { FiltersSelect } from "./filtersSelect";
import { Header } from "./header";

export const ManagePanel: React.FC<{ invoicesCount: number }> = ({
  invoicesCount,
}) => {
  return (
    <div className="flex justify-between items-center">
      <Header length={invoicesCount} />
      <div className="flex gap-5">
        <FiltersSelect />
        <AddNewInvoiceButton />
      </div>
    </div>
  );
};
