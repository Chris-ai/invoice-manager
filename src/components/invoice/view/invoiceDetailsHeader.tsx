import { StatusLabel } from "@/components/status";
import { Status } from "@/data/types";

interface IProps {
  status: Status;
}

export const InvoiceDetailsHeader: React.FC<{ status: Status }> = ({
  status,
}) => {
  return (
    <div className="flex justify-between w-full py-6">
      <p className=" text-body-variant text-[#858BB2]">Status</p>
      <StatusLabel status={status} />
    </div>
  );
};
