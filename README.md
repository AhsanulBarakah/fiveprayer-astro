# FivePrayer Times

A prayer times application built with Astro, displaying Islamic prayer times in English and Arabic.

## Features

- Real-time prayer times fetched from FivePrayer API
- Bilingual support (English/Arabic) with instant language switching
- Live clock with Arabic numeral support
- Beautiful gradient UI with responsive design
- RTL support for Arabic text

## 🚀 Getting Started

### Prerequisites

- Node.js >= 22.12.0

### Installation

1. Clone the repository
2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   ```sh
   cp .env.example .env
   ```
   Then add your FivePrayer API key to `.env`:
   ```
   FIVEPRAYER_API_KEY=your_api_key_here
   ```

### Development

```sh
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

```sh
npm run build
```

### Preview

```sh
npm run preview
```

## 📁 Project Structure

```text
/
├── public/
├── src
│   ├── components/
│   │   └── PrayerTimes.astro
│   ├── lib/
│   │   └── api.ts
│   ├── layouts/
│   └── pages/
│       └── index.astro
├── .env.example
└── package.json
```

## � API Key

The API key is stored in the `.env` file (not committed to git). Use `.env.example` as a template for your local setup.
