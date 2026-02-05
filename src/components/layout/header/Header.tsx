import Image from "next/image";
import HeaderDropdown from "./HeaderDropdown";
import MainLink from "@/components/ui/MainLink";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="border-accent w-full bg-secondary text-secondary-text z-20 text-sm">
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
                <MainLink text="Latest issue" disabled url="/volumes/1" />
                <MainLink text="All issues" url="/articles/all-issues" />
                <MainLink
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
                <MainLink
                  text="Advances in Mechanics and Control"
                  url="/proceedings/amc"
                />
              </ul>
            </HeaderDropdown>
          </li>
          <li>
            <HeaderDropdown text="About">
              <ul className="flex flex-col gap-5 text-sm">
                <MainLink text="Aims and scope" url="/about/aims-and-scope" />
                <MainLink text="Editorial board" url="/about/editorial-board" />
                <MainLink text="Ethics Policy" url="/about/ethics-policy" />
                <MainLink
                  text="Declaration on privacy"
                  url="/about/declaration-on-privacy"
                />
                <MainLink text="Contacts" url="/about/contacts" />
              </ul>
            </HeaderDropdown>
          </li>

          <li>
            <HeaderDropdown text="Publish">
              <ul className="flex flex-col gap-5 text-sm">
                <MainLink
                  external
                  target="_blank"
                  disabled
                  text="Submit an article"
                  url="https://confchair.org"
                />
                <MainLink
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
            <MainLink
              disabled
              text="Submit an article"
              target="_blank"
              external={true}
              url="#"
            />

            <MainLink disabled text="Guide for authors" url="#" />

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
