# Atul Beej Agency

Standalone VS Code project for the bilingual Atul Beej Agency website.

## Requirements

- Node.js 18 or newer
- npm, pnpm, or yarn
- VS Code with the built-in JavaScript and TypeScript support

## Run in VS Code

1. Extract this folder.
2. Open the extracted `atul-beej-agency-vscode` folder in VS Code.
3. Open the VS Code terminal.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the URL shown in the terminal, normally:

   ```text
   http://localhost:5173
   ```

## Other commands

```bash
npm run typecheck
npm run build
npm run preview
```

## Edit the business details

Open `src/App.tsx`. The main editable contact constants are near the top:

- `WHATSAPP`
- `PHONE`
- `MAPS`
- `EMAIL`

The product catalogue starts below the `EDIT CATALOGUE HERE` comment.

## Important content rule

The catalogue intentionally uses examples where current inventory has not been confirmed. Update product names, brands, descriptions, prices, and availability only with information verified by the shop. The website does not invent stock, prices, pesticide dosage, certification, or agricultural-effectiveness claims.

## Contact behavior

The website is frontend-only. Product enquiries open WhatsApp with a prefilled message. The contact page also provides phone, email, and Google Maps actions. No form data is stored on a server.