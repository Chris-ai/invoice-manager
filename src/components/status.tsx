"use client";
import { Status } from "@/data/types";

export const StatusLabel: React.FC<{ status: Status }> = ({ status }) => {
  const statusColorClassName = () => {
    switch (status) {
      case Status.DRAFT:
        return "bg-draft-label";
      case Status.PENDING:
        return "bg-pending-label";
      case Status.PAID:
        return "bg-paid-label";
    }
  };

  const statusColorText = () => {
    switch (status) {
      case Status.DRAFT:
        return "text-draft-label";
      case Status.PENDING:
        return "text-pending-label";
      case Status.PAID:
        return "text-paid-label";
    }
  };

  return (
    <div
      className={`w-[104px] py-3 flex gap-2 items-center justify-center ${statusColorClassName()} ${statusColorText()} rounded-lg bg-opacity-10`}
    >
      <div className={`h-2 w-2 rounded-full ${statusColorClassName()}`} />
      {status}
    </div>
  );
};
