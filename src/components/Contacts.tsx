import type { FormEvent, Dispatch, SetStateAction } from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

type ContactsProps = {
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

function Contacts({
  submitted,
  setSubmitted,
  handleSubmit,
}: ContactsProps) {
  return (
    <section id="contatti" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2">
        <ContactInfo />

        <ContactForm
          submitted={submitted}
          setSubmitted={setSubmitted}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}

export default Contacts;
