Jan Kohout Libišské vánočky.
Tímto návodem budete schopni spustit můj eshop, ve kterém se dají nakupovat vánočky.
```markdown
# React E-Shop

Tento projekt je moderní e-shop aplikace vytvořená pomocí Reactu a dalších knihoven. Tento návod vás provede instalací, spuštěním a základním použitím projektu.

---

## 📋 Požadavky na systém
Než začnete, ujistěte se, že máte nainstalované následující nástroje:
1. **Node.js** (doporučená verze: 16.x nebo novější)  
   [Stáhnout Node.js](https://nodejs.org/)
2. **npm** (Node Package Manager) – je součástí Node.js.
3. Textový editor, jako je [VS Code](https://code.visualstudio.com/).

---

## 🚀 Instalace projektu

### 1. Klonování repozitáře
Nejprve zkopírujte tento projekt do svého lokálního zařízení:
```bash
git clone https://github.com/vase-jmeno/react-eshop.git
```
Přejděte do adresáře projektu:
```bash
cd react-eshop
```

### 2. Instalace závislostí
Spusťte následující příkaz pro instalaci všech potřebných balíčků:
```bash
npm install
```

---

## 🛠️ Spuštění projektu

### 1. Vývojový server
Pro spuštění aplikace v režimu vývoje zadejte:
```bash
npm start
```
Aplikace se automaticky otevře ve vašem výchozím prohlížeči na adrese:
```
http://localhost:3000/
```

### 2. Produkční build
Pokud chcete vytvořit produkční verzi aplikace, použijte příkaz:
```bash
npm run build
```
Výsledný build se uloží do složky `/build`.

---

## 📚 Struktura projektu

### Klíčové adresáře:
- `src/` – obsahuje zdrojové soubory aplikace.
  - `App.js` – hlavní komponenta aplikace.
  - `components/` – jednotlivé komponenty uživatelského rozhraní.
  - `styles/` – styly a CSS soubory.
- `public/` – statické soubory, jako je HTML a obrázky.

### Konfigurační soubory:
- `package.json` – seznam závislostí a skriptů.
- `.gitignore` – soubory a složky ignorované při commitování.

---

## 📦 Použité technologie

### Hlavní knihovny:
- **React** – základní knihovna pro vytváření uživatelských rozhraní.
- **React Router** – správa navigace v aplikaci.
- **MUI (Material-UI)** – moderní designové komponenty.
- **Styled-Components** – CSS-in-JS pro flexibilní stylování.

### Další nástroje:
- **Supabase** – backend a autentizace.
- **Bootstrap** – rychlé a responzivní stylování.

---

## 📌 Další příkazy

- **Testování aplikace**:
  ```bash
  npm test
  ```
  Spustí testy definované v projektu.

- **Vyčištění cache**:
  ```bash
  npm cache clean --force
  ```

---

## 🔗 Užitečné odkazy
- [React dokumentace](https://reactjs.org/)
- [Material-UI dokumentace](https://mui.com/)
- [Node.js ke stažení](https://nodejs.org/)
