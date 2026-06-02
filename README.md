# Ticket Bounty

A ticket management application built with the Next.js App Router. Create, view, edit, and track support-style tickets through their lifecycle (`OPEN` → `IN_PROGRESS` → `DONE`). Built as a hands-on companion to *The Road to Next*.

## Features

- **Ticket lifecycle** — tickets carry a status (`OPEN`, `IN_PROGRESS`, `DONE`) rendered with status-specific icons.
- **Server Actions** — create and update tickets via Next.js Server Actions with `revalidatePath`.
- **Prisma + PostgreSQL** — typed data access through Prisma, backed by PostgreSQL (e.g. Supabase with connection pooling).
- **Toast feedback** — success/error notifications via [Sonner](https://sonner.emilkowal.ski/).
- **Light/dark themes** — theme switching with `next-themes`.
- **Loading, error & not-found states** — route-level `loading.tsx`, `error.tsx`, and `not-found.tsx`.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router) & [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma 6](https://www.prisma.io/) + PostgreSQL
- [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- [Zod](https://zod.dev/) for validation
- [Sonner](https://sonner.emilkowal.ski/) for toasts
- [Lucide](https://lucide.dev/) icons

## Getting Started

### Prerequisites

- Node.js 20+
- A PostgreSQL database

### 1. Install dependencies

```bash
npm install
```

`prisma generate` runs automatically via the `postinstall` script.

### 2. Configure environment

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable        | Description                                            |
| --------------- | ------------------------------------------------------ |
| `DATABASE_URL`  | Pooled connection string (used by the app at runtime). |
| `DIRECT_URL`    | Direct connection string (used for migrations).        |

### 3. Set up the database

Apply the schema and seed sample tickets:

```bash
npx prisma migrate dev
npm run prisma-seed
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

| Script                  | Description                                |
| ----------------------- | ------------------------------------------ |
| `npm run dev`           | Start the development server.              |
| `npm run build`         | Build for production.                      |
| `npm run start`         | Start the production server.               |
| `npm run lint`          | Run ESLint.                                |
| `npm run lint-fix`      | Run ESLint with auto-fix.                  |
| `npm run type`          | Type-check with `tsc --noEmit`.            |
| `npm run format`        | Format the codebase with Prettier.         |
| `npm run format:check`  | Check formatting without writing.          |
| `npm run prisma-seed`   | Seed the database with sample tickets.     |

## Project Structure

```
src/
├── app/                    # App Router routes
│   ├── page.tsx            # Home
│   └── tickets/            # Ticket list, detail, edit, error & loading states
├── components/             # Shared UI (header, theme, form, shadcn/ui)
├── features/
│   └── ticket/             # Ticket feature: actions, components, queries, constants
├── lib/                    # Prisma client, utils
└── paths.ts                # Centralized route helpers

prisma/
├── schema.prisma           # Ticket model & TicketStatus enum
└── seed.ts                 # Seed script
```

## Data Model

```prisma
model Ticket {
  id        String       @id @default(cuid())
  createdAt DateTime     @default(now())
  updatedAt DateTime     @updatedAt
  title     String
  content   String       @db.VarChar(1024)
  status    TicketStatus @default(OPEN)
}

enum TicketStatus {
  OPEN
  IN_PROGRESS
  DONE
}
```

## Deployment

Deploy on [Vercel](https://vercel.com/new). Set the environment variables above in your project settings, and make sure `DATABASE_URL` / `DIRECT_URL` point at your hosted PostgreSQL instance.
