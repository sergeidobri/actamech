import ContactsForm from "@/components/pages/about/contacts/ContactForm";

export default function ContactsPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <section className="text-left-border">
          <p>
            If you haven't found an answer you are looking for on our website,
            you can contact us by using the submission form.
          </p>
          <h1 className="border-underline-2 w-fit font-semibold text-tertiary-text text-lg mt-4">
            Contact Details
          </h1>
          <p className="mt-4">
            <ul className="list">
              <li>
                Address: 3, Ordzhonikidze Str., Moscow, 117419, Russian
                Federation
              </li>
              <li>E-mail: editor-in-chief@actamech.com</li>
              <li>Web-site: www.actamech.com</li>
            </ul>
          </p>
        </section>
      </div>
      <div>
        <ContactsForm />
      </div>
    </div>
  );
}
