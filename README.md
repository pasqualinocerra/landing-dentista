# Landing Page — Studio Dentistico

Landing page responsive per uno studio dentistico, sviluppata con React, TypeScript e Tailwind CSS. Il progetto punta a offrire un'interfaccia professionale, una navigazione intuitiva e un percorso utente orientato al contatto.

## Il progetto

La pagina presenta lo studio, i servizi odontoiatrici e le informazioni utili al visitatore attraverso una struttura modulare e adattabile a desktop, tablet e smartphone.

## Funzionalità e sezioni

- **Hero:** presentazione iniziale e call-to-action.
- **Studio:** presentazione dello studio e dei suoi valori.
- **Servizi:** panoramica delle prestazioni.
- **Trust:** sezione dedicata alla fiducia e alla professionalità.
- **Recensioni:** area dedicata alle testimonianze.
- **FAQ:** domande frequenti interattive.
- **CTA:** inviti all'azione.
- **Contatti:** modulo con gestione dello stato dell'interfaccia.
- **Navbar e Footer:** navigazione e informazioni finali.

**Stato del modulo di contatto:** il modulo gestisce attualmente l'interazione lato frontend. L'invio effettivo dei messaggi e la loro memorizzazione richiedono un'integrazione con un backend o un servizio esterno.

## Tecnologie

- **React:** sviluppo dell'interfaccia a componenti.
- **TypeScript:** tipizzazione di `App` e dei componenti migrati.
- **Tailwind CSS:** styling e layout responsive.
- **Vite:** ambiente di sviluppo e build.
- **JavaScript:** utilizzato anche per i dati dei servizi e l'entry point attuale.
- **Git e GitHub:** versionamento del codice.

## Struttura del progetto

```text
landing-dentista/
├── public/
├── src/
│   ├── components/
│   │   ├── Contacts.tsx
│   │   ├── CTA.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Reviews.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── Services.tsx
│   │   ├── Studio.tsx
│   │   └── Trust.tsx
│   ├── data/
│   │   └── services.js
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.js
└── README.md
```

## Installazione

Clona il repository:

```bash
git clone https://github.com/pasqualinocerra/landing-dentista.git
```

Entra nella cartella del progetto:

```bash
cd landing-dentista
```

Installa le dipendenze:

```bash
npm install
```

Avvia il server di sviluppo:

```bash
npm run dev
```

Apri nel browser l'indirizzo locale indicato da Vite.

## Build e verifiche

Per generare la build di produzione:

```bash
npm run build
```

Per controllare il codice TypeScript senza generare file:

```bash
npx tsc --noEmit
```

Per visualizzare la build localmente:

```bash
npm run preview
```

## Possibili sviluppi futuri

- Completamento della migrazione a TypeScript.
- Backend per la gestione delle richieste di contatto.
- Invio effettivo dei messaggi tramite email o servizio dedicato.
- Validazione dei dati lato server.
- Sistema di prenotazione online.
- Ulteriori miglioramenti SEO e monitoraggio delle visite.

Questi punti sono sviluppi possibili e non funzionalità dichiarate come già implementate.

## Developer

**Pasqualino Cerra** — Frontend Developer

Progetto dimostrativo per portfolio personale.

- **Portfolio:** https://pasqualinocerra.vercel.app
- **GitHub:** https://github.com/pasqualinocerra
- **Repository:** https://github.com/pasqualinocerra/landing-dentista

## Licenza

Progetto dimostrativo realizzato per portfolio personale.

© 2026 Pasqualino Cerra
