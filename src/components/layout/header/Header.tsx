import Image from "next/image";
import HeaderDropdown from "./HeaderDropdown";
import Link from "next/link";
import { Search } from "lucide-react";
import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className="border-accent w-full bg-secondary text-secondary-text z-20 text-sm sticky top-0">
      <div className="mx-auto container flex flex-row justify-between items-center">
        <Link
          href="/"
          className="py-4 flex flex-row items-center h-fit my-auto gap-2"
        >
          <Image
            priority
            className="w-auto h-10"
            src="/icons/siteIconLight.png"
            alt="Site icon"
            height={100}
            width={100}
          />
          <span className="font-semibold font-[ZT-Neue-Ralewe-Regular] text-xs">
            ACTA MECHANICA <br /> ET IMPERIUM
          </span>
        </Link>
        <ul className="py-4 flex-row gap-8 hidden md:flex">
          <li>
            <HeaderDropdown text="Articles & Issues">
              <ul className="flex flex-col gap-5 text-sm">
                <HeaderLink text="Latest issue" disabled url="/volumes/1" />
                <HeaderLink text="All issues" url="/articles/all-issues" />
                <HeaderLink
                  disabled
                  text="Articles in press"
                  url="/articles/articles-in-press"
                />
              </ul>
            </HeaderDropdown>
          </li>
          <li>
            <HeaderDropdown text="Proceedings">
              <ul className="flex flex-col gap-5 text-sm">
                <HeaderLink
                  text="Advances in Mechanics and Control"
                  url="/proceedings/amc"
                />
              </ul>
            </HeaderDropdown>
          </li>
          <li>
            <HeaderDropdown text="About">
              <ul className="flex flex-col gap-5 text-sm">
                <HeaderLink text="Aims and scope" url="/about/aims-and-scope" />
                <HeaderLink
                  text="Editorial board"
                  url="/about/editorial-board"
                />
                <HeaderLink text="Ethics Policy" url="/about/ethics-policy" />
                <HeaderLink
                  text="Declaration on privacy"
                  url="/about/declaration-on-privacy"
                />
                <HeaderLink text="Contacts" url="/about/contacts" />
              </ul>
            </HeaderDropdown>
          </li>

          <li>
            <HeaderDropdown text="Publish">
              <ul className="flex flex-col gap-5 text-sm">
                <HeaderLink
                  external
                  target="_blank"
                  disabled
                  text="Submit an article"
                  url="https://confchair.org"
                />
                <HeaderLink
                  disabled
                  text="Guide for authors"
                  url="/publish/guide-for-authors"
                />
              </ul>
            </HeaderDropdown>
          </li>
        </ul>

        <div>
          <div className="flex flex-row gap-2 self-stretch items-center">
            <HeaderLink
              disabled
              text="Submit an article"
              target="_blank"
              external={true}
              url="#"
            />

            <HeaderLink disabled text="Guide for authors" url="#" />

            <div>
              <div className="p-4 text-2xl cursor-pointer hover:text-accent">
                <Search width={20} height={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
