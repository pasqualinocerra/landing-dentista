export type Service = {
  icon: string;
  title: string;
  description: string;
};

export type ServicesProps = {
  services: Service[];
  onRequestInfo: () => void;
};

export const services: Service[] = [
  {
    title: "Implantologia",
    description:
      "Soluzioni implantari moderne per recuperare funzionalità ed estetica del sorriso.",
    icon: "🦷",
  },
  {
    title: "Estetica dentale",
    description:
      "Trattamenti personalizzati per migliorare forma, colore e armonia del sorriso.",
    icon: "✨",
  },
  {
    title: "Ortodonzia",
    description:
      "Percorsi ortodontici personalizzati per bambini, ragazzi e adulti.",
    icon: "😁",
  },
  {
    title: "Igiene dentale",
    description:
      "Prevenzione e igiene professionale per mantenere denti e gengive sani.",
    icon: "🪥",
  },
  {
    title: "Conservativa",
    description:
      "Cure conservative moderne per preservare il più possibile i denti naturali.",
    icon: "🔬",
  },
  {
    title: "Prima visita",
    description:
      "Una valutazione completa per capire insieme il percorso più adatto.",
    icon: "👨‍⚕️",
  },
];

export const reviews = [
  {
    name: "Marco R.",
    text: "Studio moderno, personale professionale e grande attenzione al paziente.",
  },
  {
    name: "Giulia M.",
    text: "Mi sono trovata molto bene. Tutto spiegato con chiarezza e senza mettere pressione.",
  },
  {
    name: "Francesco L.",
    text: "Professionalità e disponibilità. Esperienza molto positiva.",
  },
];
