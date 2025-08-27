# Sample Store

## Avvio del progetto

Questo progetto utilizza **Next.js 15**, **Tailwind CSS**, **shadcn/ui**, **Redux Toolkit**, e **yarn** come package manager.

### Prerequisiti
- Yarn
- Node.js: `^18.18.0 || ^19.8.0 || >= 20.0.0`

### Installazione
- Clonare il repository: `git clone https://github.com/Federica129/sample-store.git`
- Installa le dipendenze: `yarn install`
- Avvio in sviluppo: `yarn dev`
- Apri [http://localhost:3000](http://localhost:3000) nel browser (o la porta indicata dal terminale).
- ⚠️ Da qui puoi passare al login dell'app utilizzando questa email (`test@example.com`) se è la tua **prima volta** oppure se hai **svuotato la memoria locale**.

## Architettura e scelte tecniche

- **Next.js 15 App Router**.  
- **shadcn/ui** e **Sonner** (consigliato da shadcn per sostituire componenti deprecati) per componenti UI accessibili basati su Tailwind.  
- **Tailwind CSS** per styling rapido e modulare.  
- **Redux Toolkit** per gestione globale dello stato (carrello, utente).  
- **i18n** per la traduzione dei testi.  
- **react-hook-form** e **yup** per la gestione e validazione dei form.
- **TanStack Query** per gestione asincrona e caching dei dati lato client  

## Componenti principali

- **Navbar / Footer** → layout globale con supporto a theme toggle, selezione lingua e carrello.  
- **ProductCard** → memoized per ottimizzare rendering nella lista prodotti.  
- **ProtectedRoute** → protezione delle pagine private, gestisce redirect in base allo stato utente (loggato / non loggato).  
- **SidebarCart** → carrello mobile/desktop.  

## Trade-off principali

- La scelta di **Redux Toolkit** è stata fatta per gestire **carrello e utente** in modo centralizzato e facilmente accessibile nei vari componenti.  
- La **memoizzazione** è applicata solo alle **card dei prodotti** per ridurre i re-rendering su liste grandi.
- L’utilizzo di **TanStack Query** utilizzato per la lista prodotti utilizzando **fakestoreapi** , così da sfruttare caching, gestione dello stato di caricamento ed errori in modo più semplice.  
- L’uso di **localStorage** per la persistenza dello "stato autenticato", dati utente loggato e carrello:   
  - ⚠️ non gestisce la sincronizzazione multi-device → se svuotato o cambi browser, i dati andranno persi e verranno resettati ai default.  
