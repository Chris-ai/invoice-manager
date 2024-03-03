import { Chevron } from "@/components/icons/chevron";

export const FiltersSelect = () => {
  return (
    <button className="bg-transparent border-none flex gap-3 justify-center items-center">
      <FilterTitle />
      <Chevron />
    </button>
  );
};

const FilterTitle = () => {
  return (
    <>
      <p className="text-heading-s-variant dark:text-white text-dark-navy hidden sm:block">
        Filter by status
      </p>
      <p className="text-heading-s-variant dark:text-white text-dark-navy sm:hidden">
        Filter
      </p>
    </>
  );
};
