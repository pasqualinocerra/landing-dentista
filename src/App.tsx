import { useState } from "react";
import type { FormEvent } from "react";

import Services from "./components/Services";
import { services, reviews } from "./data/services";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Studio from "./components/Studio";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Trust from "./components/Trust";
import CTA from "./components/CTA";

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const scrollTo = (id: string): void => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar
        scrollTo={scrollTo}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Hero scrollTo={scrollTo} />

      <Trust />

      <Services
        services={services}
        onRequestInfo={() => scrollTo("contatti")}
      />

      <Studio />

      <CTA scrollTo={scrollTo} />

      <Reviews reviews={reviews} />

      <FAQ
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
      />

      <Contacts
        submitted={submitted}
        setSubmitted={setSubmitted}
        handleSubmit={handleSubmit}
      />

      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default App;