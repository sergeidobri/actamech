import Image from "next/image";
import Link from "next/link";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="py-4 bg-secondary w-full text-secondary-text min-h-96 flex flex-col justify-between border-t-accent border-t-2">
      <div className="container flex justify-between m-auto">
        <Link href="/" className="flex items-center my-auto gap-4 h-full">
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="relative h-16 w-auto">
              <Image
                width={100}
                height={100}
                className="h-16 w-auto"
                src="/icons/siteIconLight.png"
                alt="Site icon"
              />
            </div>
            <h1 className="font-semibold font-playfair-display text-nowrap">
              ACTA MECHANICA <br /> ET IMPERIUM
            </h1>
          </div>

          <div className="relative h-16 w-[212px] flex-shrink-0">
            <Image
              fill
              className="object-contain w-full"
              src="/icons/RUDNLogo.png"
              alt="RUDN Logo"
              priority
            />
          </div>
        </Link>

        <div className="after:bg-primary after:opacity-20 after:h-3/4 after:my-auto after:w-[1px] flex flex-row"></div>

        <section>
          <div className="flex flex-col gap-2">
            <h1 className="uppercase text-lg font-bold mb-4">
              Articles & Issues
            </h1>
            <FooterLink disabled text="Latest issue" url="/volumes/1" />
            <FooterLink text="All issues" url="/articles/all-issues" />
            <FooterLink
              disabled
              text="Articles in press"
              url="/articles/articles-in-press"
            />
          </div>
        </section>

        <div className="after:bg-primary after:opacity-20 after:h-3/4 after:my-auto after:w-[1px] flex flex-row"></div>

        <section>
          <div className="flex flex-col gap-2">
            <h1 className="uppercase text-lg font-bold mb-4">About</h1>
            <FooterLink text="Aims and scope" url="/about/aims-and-scope" />
            <FooterLink text="Editorial board" url="/about/editorial-board" />
            <FooterLink text="Ethics Policy" url="/about/ethics-policy" />
            <FooterLink
              text="Declaration on privacy"
              url="/about/declaration-on-privacy"
            />
            <FooterLink text="Contacts" url="/about/contacts" />
          </div>
        </section>

        <div className="after:bg-primary after:opacity-20 after:h-3/4 after:my-auto after:w-[1px] flex flex-row"></div>

        <section>
          <div className="flex flex-col gap-2">
            <h1 className="uppercase text-lg font-bold mb-4">Publish</h1>
            <FooterLink disabled external text="Submit your article " url="/" />
            <FooterLink
              disabled
              text="Guide for authors"
              url="/publish/guide-for-authors"
            />
          </div>
        </section>
      </div>
      <div className="text-contrast-disabled-text text-sm flex flex-row justify-between items-end border-t-1 px-4 pt-2 border-t-primary">
        <section>
          <p>Copyright © 2026. All rights reserved.</p>
        </section>
        <section>
          <a
            className="hover:text-gray-100 base-colors-transition underline"
            href="/about/contacts"
          >
            Contact
          </a>{" "}
          |
          <a
            className="hover:text-gray-100 base-colors-transition underline"
            href="/about/declaration-on-privacy"
          >
            Terms & Privacy Policy
          </a>
        </section>
      </div>
    </footer>
  );
}
