import Navigation from "./Navigation";
import Logo from "@/components/ui/Logo";

export default function Header() {
  return (
    <header className="border-accent w-full bg-secondary text-secondary-text z-20 text-sm sticky top-0 h-(--header-height)">
      <nav className="mx-auto container flex flex-row justify-between lg:justify-evenly items-center">
        <Logo />
        <Navigation />
      </nav>
    </header>
  );
}
