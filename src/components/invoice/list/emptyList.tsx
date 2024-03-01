import Image from "next/image";

export const EmptyList = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Image
        src={"/images/empty.svg"}
        alt="no-documents-in-here"
        height={240}
        width={240}
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-heading-m text-dark-navy dark:text-white">
          There is nothing here
        </h1>
        <h2 className="text-body text-slate-blue dark:text-white text-center">
          Create an invoice by clicking the New button and get started
        </h2>
      </div>
    </div>
  );
};
