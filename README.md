Návod na instalaci Reactu:
1. Instalace Node.js a npm**:
   Nejdříve si musíš nainstalovat [Node.js](https://nodejs.org/), který zahrnuje nástroj `npm` (Node Package Manager). To ti umožní instalovat balíčky pro React.
   - Stáhni a nainstaluj Node.js podle pokynů na stránkách.
   - Po instalaci ověř, že je Node.js a npm správně nainstalován, pomocí příkazů:
     
     node -v
     npm -v
    
   Tyto příkazy by měly vypsat verzi Node.js a npm, což znamená, že jsou správně nainstalovány.

2. **Spuštění vývojového serveru**:
   Po vytvoření aplikace a přechodu do adresáře můžeš spustit vývojový server:

   npm start
   
   Tento příkaz spustí React aplikaci na lokálním serveru (obvykle na `http://localhost:3000/`). Otevři tuto adresu ve webovém prohlížeči, abys viděl svou aplikaci v chodu.

3. Práce s Reactem:
   - Otevři adresář projektu v textovém editoru (např. [VS Code](https://code.visualstudio.com/)).
   - Základní soubory projektu najdeš v adresáři `src`, kde můžeš začít upravovat soubor `src/App.js` pro vytvoření vlastních komponent.
   
4. Instalace dalších knihoven:
   Pokud chceš přidat nějaké další knihovny, například pro práci s routováním nebo správu stavu, můžeš použít `npm` pro jejich instalaci. Například pro instalaci knihovny pro routování React Router:
   npm install react-router-dom

5. Instalace MUI (Material-UI)
MUI je populární knihovna komponent pro React, která poskytuje spoustu připravených komponent pro rychlé vytvoření moderního uživatelského rozhraní.
Pro instalaci MUI a jeho závislostí použij následující příkazy v terminálu (být ve složce projektu):

    Instalace MUI Core:

npm install @mui/material @emotion/react @emotion/styled

Tento příkaz nainstaluje základní komponenty MUI (např. tlačítka, textová pole, a další), stejně jako potřebné styly založené na Emotion (CSS-in-JS knihovna, kterou MUI používá).

Instalace MUI Icons: MUI má také vlastní sadu ikon, které můžeš snadno použít ve své aplikaci. Pro jejich instalaci spusť následující příkaz:

npm install @mui/material @mui/styled-engine-sc styled-components
npm install @fontsource/roboto
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

Tento příkaz nainstaluje sadu ikon Material Design pro použití v React komponentách.

   
