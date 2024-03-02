import { Avatar } from "./avatar";
import { Logo } from "./logo";
import { ThemeSwitcher } from "./themeSwitcher";

export const Navigation = () => {
  return (
    <>
      <MobileNav
        logo={<Logo />}
        avatar={<Avatar />}
        themeSwitcher={<ThemeSwitcher />}
      />
      <DesktopSidebar
        logo={<Logo />}
        avatar={<Avatar />}
        themeSwitcher={<ThemeSwitcher />}
      />
    </>
  );
};

interface NavProps {
  logo?: React.ReactNode;
  themeSwitcher?: React.ReactNode;
  avatar?: React.ReactNode;
}

const MobileNav: React.FC<NavProps> = ({ logo, themeSwitcher, avatar }) => {
  return (
    <nav className="w-full flex justify-between bg-shadow-navy dark:bg-dark-blue-gray h-[72px] lg:hidden">
      {logo}
      <div className="flex h-full gap-6">
        {themeSwitcher}
        <div className="grid place-items-center border-l border-l-light-navy px-6">
          {avatar}
        </div>
      </div>
    </nav>
  );
};

const DesktopSidebar: React.FC<NavProps> = ({
  logo,
  themeSwitcher,
  avatar,
}) => {
  return (
    <aside className="h-full justify-between bg-shadow-navy dark:bg-dark-blue-gray hidden lg:flex flex-col">
      {logo}
      <div className="flex flex-col w-full items-center gap-6">
        {themeSwitcher}
        <div className="grid place-items-center border-l border-light-navy px-6 lg:py-6 v:px-0 lg:border-t lg:border-l-0 lg:w-full">
          {avatar}
        </div>
      </div>
    </aside>
  );
};
