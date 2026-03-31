# EliteChauffeur — Premium Chauffeur Service Website

> **Designed on [Figma Make](https://www.figma.com/design/hRZbKocEeMfkqEOY7LU6qZ/Website-Redesign-for-Booking)** — This project was built directly from a Figma Make design file and exported as a production-ready React codebase.

---

## 📌 Project Description

**EliteChauffeur** is a modern, conversion-focused website for a premium chauffeur service business. The design was created and prototyped in **Figma Make**, then implemented as a fully functional web application using **React**, **TypeScript**, and **Tailwind CSS**.

The site is optimized for performance, SEO, and user experience — targeting customers who need airport transfers, corporate travel, and event/wedding transportation.

---

## 🎨 Design Origin — Figma Make

This codebase was generated and styled based on the original Figma Make design:

- **Figma File:** [Website Redesign for Booking](https://www.figma.com/design/hRZbKocEeMfkqEOY7LU6qZ/Website-Redesign-for-Booking)
- **Design Tool:** Figma Make
- **Color Scheme:** Black (`#000000`), Gold/Yellow (`#CA8A04`), White (`#FFFFFF`)
- **Typography:** System font stack with clear responsive hierarchy
- **Style:** Luxury, minimal, professional

---

## ✨ Key Features

- **Multi-page routing** — Home, Services, Fleet, About, Contact, and 404
- **Booking system** — Fast booking form with validation and toast notifications
- **Fleet showcase** — Vehicle catalog with filtering and individual detail pages
- **Service pages** — Dedicated pages for Airport Transfers, Corporate Chauffeur, and Events & Weddings
- **SEO optimized** — Schema.org markup, canonical tags, semantic HTML, per-page meta tags
- **GDPR compliant** — Cookie consent banner with accept/decline
- **Fully responsive** — Mobile-first design for all screen sizes
- **Accessibility** — WCAG-compliant with proper ARIA labels

---

## 🛠 Tech Stack

| Technology        | Version | Purpose                  |
| ----------------- | ------- | ------------------------ |
| React             | 18.3.1  | UI library               |
| TypeScript        | —       | Type safety              |
| React Router      | 7.13    | Client-side routing      |
| Tailwind CSS      | 4.1     | Utility-first styling    |
| Vite              | 6.3     | Build tool               |
| Radix UI / Shadcn | —       | Accessible UI primitives |
| react-hook-form   | 7.55    | Form validation          |
| sonner            | 2.0     | Toast notifications      |
| lucide-react      | 0.487   | Icons                    |
| date-fns          | 3.6     | Date utilities           |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation with mobile menu
│   │   ├── Footer.tsx          # Site footer
│   │   ├── BookingForm.tsx     # Booking form with validation
│   │   ├── BookingDialog.tsx   # Modal booking wrapper
│   │   ├── SEOHead.tsx         # Per-page SEO meta tags & schema
│   │   ├── CookieBanner.tsx    # GDPR cookie consent
│   │   └── ui/                 # Shadcn/Radix UI components
│   ├── pages/
│   │   ├── Root.tsx            # Layout wrapper
│   │   ├── Home.tsx            # Hero, services, reviews
│   │   ├── Services.tsx        # Services overview
│   │   ├── Fleet.tsx           # Vehicle catalog
│   │   ├── VehicleDetails.tsx  # Single vehicle page
│   │   ├── About.tsx           # Company page
│   │   ├── Contact.tsx         # Contact form
│   │   ├── NotFound.tsx        # 404 page
│   │   └── services/
│   │       ├── AirportTransfers.tsx
│   │       ├── CorporateChauffeur.tsx
│   │       └── EventsWeddings.tsx
│   ├── data/
│   │   └── vehicles.ts         # Vehicle data & TypeScript types
│   ├── routes.tsx              # React Router configuration
│   └── App.tsx                 # Root app component
└── styles/
    ├── index.css
    ├── fonts.css
    ├── tailwind.css
    └── theme.css
```

---

## 🚀 Getting Started

Install dependencies:

```bash
npm i
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📄 License

Private project. All rights reserved.
