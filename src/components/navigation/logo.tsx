import Image from "next/image";

export const Logo = () => {
  return (
    <div className="bg-primary relative grid place-items-center p-6 lg:p-8 rounded-r-[20px] overflow-hidden">
      <Image
        src={"/images/logo.svg"}
        alt="invoice-app-logo"
        height={38}
        width={40}
        className="z-10 h-6 w-6 lg:h-8 lg:w-10"
      />
      <div className="bg-secondary absolute top-1/2 w-full h-full rounded-l-[20px]" />
    </div>
  );
};
