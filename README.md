# Simple Counter App

A simple counter application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Increment counter
- Decrement counter
- Reset counter to zero
- Responsive design
- Smooth animations and transitions

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts      # Health check endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page with counter
├── components/               # Reusable components
├── lib/                      # Utility functions
├── public/                   # Static assets
├── .gitignore               # Git ignore file
├── README.md                # Project documentation
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## API Endpoints

- `GET /api/ping` - Health check endpoint

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
