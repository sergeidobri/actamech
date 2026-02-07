import ContactsForm from "@/components/pages/about/contacts/ContactForm";
import List from "@/components/ui/List";

export default function ContactsPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex-2">
        <section className="text-left-border">
          <p>
            If you haven't found an answer you are looking for on our website,
            you can contact us by using the submission form.
          </p>
          <h1 className="border-underline-2 w-fit font-semibold text-tertiary-text text-lg my-4">
            Contact Details
          </h1>
          <List>
            <li>
              Address: 3, Ordzhonikidze Str., Moscow, 117419, Russian Federation
            </li>
            <li>E-mail: editor-in-chief@actamech.com</li>
            <li>Web-site: www.actamech.com</li>
          </List>
        </section>
      </div>
      <div className="flex-1">
        <ContactsForm />
      </div>
    </div>
  );
}
