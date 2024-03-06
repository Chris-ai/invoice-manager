import { pages } from "@/app/pages";
import Link from "next/link";
import { ArrowLeft } from "./icons/arrowLeft";

export const GoBackButton = () => {
  return (
    <Link href={pages.home} className="gap-6 items-center w-auto inline-flex">
      <ArrowLeft />
      <p className="text-heading-s-variant text-dark-navy dark:text-white">
        Go Back
      </p>
    </Link>
  );
};
