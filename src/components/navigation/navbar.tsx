import { Avatar } from "./avatar";
import { Logo } from "./logo";
import { ThemeSwitcher } from "./themeSwitcher";

export const Navbar = () => {
  return (
    <nav className="w-full flex justify-between bg-shadow-navy dark:bg-dark-blue-gray h-[72px] lg:hidden">
      <Logo />
      <div className="flex h-full gap-6">
        <ThemeSwitcher />
        <div className="grid place-items-center border-l border-l-light-navy px-6">
          <Avatar />
        </div>
      </div>
    </nav>
  );
};
