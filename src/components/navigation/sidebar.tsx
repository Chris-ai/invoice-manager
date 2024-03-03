import { Avatar } from "./avatar";
import { Logo } from "./logo";
import { ThemeSwitcher } from "./themeSwitcher";

export const Sidebar = () => (
  <aside className="justify-between bg-shadow-navy dark:bg-dark-blue-gray hidden lg:flex flex-col">
    <Logo />
    <div className="flex flex-col w-full items-center gap-6">
      <ThemeSwitcher />
      <div className="grid place-items-center border-l border-light-navy px-6 lg:py-6 v:px-0 lg:border-t lg:border-l-0 lg:w-full">
        <Avatar />
      </div>
    </div>
  </aside>
);
