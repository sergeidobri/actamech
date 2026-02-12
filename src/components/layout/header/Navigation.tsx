"use client";

import { useState, useEffect, Fragment } from "react";
import { usePathname } from "next/navigation";
import { NAVBAR_GROUPS as menuItems } from "@/lib/constants/navigation";
import HeaderDropdown from "./HeaderDropdown";
import HeaderLink from "./HeaderLink";
import { Menu, Search, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
        <div className="hidden xl:flex flex-row items-center">
          <HeaderLink
            disabled
            text="Submit an article"
            target="_blank"
            external={true}
            url="#"
            className="w-fit px-4 border-x-1 border-accent mr-0!"
          />

          <HeaderLink
            disabled
            text="Guide for authors"
            url="#"
            className="w-fit px-4 border-r-1 border-accent h-full mr-0!"
          />
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
          <Menu />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        id="mobile-menu"
        className={`
          fixed top-0 right-0 h-full w-[300px] max-w-[90vw] z-50 p-5
          bg-secondary shadow-2xl
          transition-transform duration-300 ease-in-out
          transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        <div className="flex justify-end">
          <button
            className="cursor-pointer hover:text-accent"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X />
          </button>
        </div>
        <ul className="flex flex-col gap-4 no-scrollbar">
          {menuItems.map((group) => (
            <Fragment key={group.groupName}>
              <div className="text-gray-400">
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
