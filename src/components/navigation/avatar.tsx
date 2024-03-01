import Image from "next/image";

export const Avatar = () => {
  return (
    <Image
      src={"/images/avatar.webp"}
      alt="baby-yoda-with-mando"
      height={40}
      width={40}
      className="rounded-full h-8 w-8 lg:h-10 lg:w-10"
    />
  );
};
