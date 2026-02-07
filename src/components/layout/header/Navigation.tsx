"use client";

import { useState, useEffect, Fragment } from "react";
import { usePathname } from "next/navigation";
import { NAVBAR_GROUPS as menuItems } from "@/lib/constants/navigation";
import HeaderDropdown from "./HeaderDropdown";
import HeaderLink from "./HeaderLink";
import { Menu, Search, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (isMobileMenuOpen && !target.closest("#mobile-menu")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <ul className="py-4 flex-row gap-8 hidden lg:flex">
        {menuItems.map((group) => (
          <li key={group.groupName}>
            <HeaderDropdown text={group.groupName}>
              <ul className="flex flex-col gap-5 text-sm">
                {group.elements.map((element) => (
                  <HeaderLink
                    text={element.label}
                    disabled={element.href == null}
                    url={element.href}
                    key={element.label}
                    external={element.external}
                  ></HeaderLink>
                ))}
              </ul>
            </HeaderDropdown>
          </li>
        ))}
      </ul>

      <div>
        <div className="hidden xl:flex gap-2 flex-row items-center">
          <HeaderLink
            disabled
            text="Submit an article"
            target="_blank"
            external={true}
            url="#"
          />

          <HeaderLink disabled text="Guide for authors" url="#" />
        </div>
      </div>

      <div className="flex items-center gap-2 text-2xl">
        <button className="p-2  cursor-pointer hover:text-accent">
          <Search width={20} height={20} />
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center cursor-pointer p-2 hover:text-accent"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${
          isMobileMenuOpen && isMobile ? "block" : "hidden"
        } lg:hidden px-2 mt-2 mr-2 rounded pt-2 pb-3 space-y-1 sm:px-3 absolute right-0 top-full w-[300px] max-w-[90vw] bg-secondary`}
      >
        <ul className="flex flex-col gap-4">
          {menuItems.map((group) => (
            <Fragment key={group.groupName}>
              <div className="text-secondary-hover">
                <h3>{group.groupName}</h3>
                <hr />
              </div>
              {group.elements.map((element) => (
                <li
                  key={`${group.groupName}-${element.label}`}
                  className="w-full mobile-menu-button"
                >
                  <HeaderLink
                    text={element.label}
                    url={element.href}
                    className="truncate block inline-block w-fit max-w-[100%]"
                  ></HeaderLink>
                </li>
              ))}
            </Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}
