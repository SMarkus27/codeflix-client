"use client";
import { Logo } from "@/app/components/Logo";
import { NavLinks } from "@/app/components/NavLinks";
import { UserProfile } from "@/app/components/UserProfile";
import { useScroll } from "@/app/hooks/useScroll";

export const Header = () => {
  const isScrolled = useScroll();

  return (
    <header
      className={`${isScrolled && "bg-black"} fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 lg:px-10 lg-py-6 transform-all`}
    >
      <div className="flex items-center space-x-2 md:space-x-8">
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
};
