import { StatusLabel } from "@/components/status";
import { Status } from "@/data/types";

interface IProps {
  status: Status;
}

export const InvoiceDetailsHeader: React.FC<{ status: Status }> = ({
  status,
}) => {
  return (
    <div className="flex justify-between items-center w-full p-6 bg-white dark:bg-dark-blue-gray rounded-lg shadow-md">
      <p className=" text-body-variant text-[#858BB2] dark:text-pale-lavender">
        Status
      </p>
      <StatusLabel status={status} />
    </div>
  );
};
