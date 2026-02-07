import Image from "next/image";
import FooterLink from "./FooterLink";
import Logo from "@/components/ui/Logo";
import FooterDelimeter from "./FooterDelimeter";

export default function Footer() {
  return (
    <footer className="py-4 bg-secondary w-full text-secondary-text min-h-96 flex gap-8 flex-col justify-between border-t-accent border-t-2">
      <div className="px-8! container items-center flex flex-col justify-stretch gap-8 m-auto lg:flex-row lg:items-stretch sm:gap-2 lg:gap-8">
        <div className="flex flex-col items-center my-auto gap-4 w-fit flex-shrink-0 sm:flex-row lg:flex-col xl:flex-row lg:items-start xl:items-center">
          <Logo className="h-16 w-auto" />

          <div className="relative">
            <Image
              className="object-contain w-full max-h-16"
              height={64}
              width={200}
              src="/icons/RUDNLogo.png"
              alt="RUDN Logo"
              priority
            />
          </div>
        </div>

        <FooterDelimeter />

        <div className="flex justify-between w-full flex-wrap gap-y-8">
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

          <FooterDelimeter />

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

          <FooterDelimeter />

          <section className="w-full md:w-auto">
            <div className="flex flex-col gap-2">
              <h1 className="uppercase text-lg font-bold mb-4">Publish</h1>
              <FooterLink
                disabled
                external
                text="Submit your article "
                url="/"
              />
              <FooterLink
                disabled
                text="Guide for authors"
                url="/publish/guide-for-authors"
              />
            </div>
          </section>
        </div>
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
