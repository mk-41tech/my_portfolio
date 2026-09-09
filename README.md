# MK Technology & Services — Portfolio Website

> **"Developing Solutions with minimal cost"**  
> High-performance, responsive freelance portfolio and business website for **MK Technology & Services**, owned by **Muthukumar** (Full Stack Developer & AI/Data Solutions Specialist, Tirunelveli, Tamil Nadu, India).

---

## 🚀 Overview

This website is a production-ready, highly responsive portfolio platform built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**. It is tailored for freelance client acquisition, showcasing customized digital services, real-world case studies, technical capabilities, an interactive workflow roadmap, and an automated client inquiry delivery system.

### Key Highlights
- ⚡ **Ultra Fast & Lightweight**: Powered by Vite + React 18 for instantaneous loading and optimal performance.
- 🎨 **Modern Tech Aesthetic**: High-contrast, clean light-first background (`#f8fafc`) with cyan and emerald accents.
- 📱 **100% Mobile & Desktop Responsive**: Fully tested and optimized against all viewport sizes with zero horizontal scrolling bugs.
- 📬 **Live Lead Delivery (Web3Forms)**: Client inquiries submitted through the contact form are instantly delivered to your email inbox with no backend server maintenance required.
- 🔍 **SEO & Metadata Configured**: Open Graph tags, Twitter card meta, semantic HTML5, and accessible ARIA attributes.
- 💼 **Case Studies**: Deep-dive modals for featured client projects (Rethika Enterprises & ROOTS Conclave Platform).

---

## 🛠️ Tech Stack

- **Frontend Library**: [React 18](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Delivery**: [Web3Forms](https://web3forms.com/)
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 📂 Project Structure

```text
my_portfolio/
├── public/                  # Static assets & favicon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Responsive header with smooth scroll navigation
│   │   │   └── Footer.tsx       # Comprehensive footer with quick links & legal modals
│   │   ├── modals/
│   │   │   ├── PrivacyModal.tsx # Privacy Policy modal
│   │   │   ├── TermsModal.tsx   # Terms & Conditions modal
│   │   │   └── ProjectModal.tsx # Interactive case study modal
│   │   └── sections/
│   │       ├── Hero.tsx         # Hero banner with live interactive developer terminal card
│   │       ├── Services.tsx     # 4 Core services with capability checklists
│   │       ├── Projects.tsx     # Selected client deliveries (Rethika Enterprises & ROOTS)
│   │       ├── Skills.tsx       # Categorized technical capabilities
│   │       ├── Process.tsx      # 8-step client collaboration workflow
│   │       ├── Testimonials.tsx # Client feedback & review structure
│   │       ├── FAQ.tsx          # Accordion-style client questions
│   │       └── Contact.tsx      # Direct contact cards & Web3Forms inquiry form
│   ├── data/
│   │   ├── portfolioData.ts     # Centralized brand info, services, projects, skills & FAQs
│   │   └── legalData.ts         # Privacy Policy & Terms and Conditions content
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces and data models
│   ├── App.tsx                  # Root application component
│   ├── index.css                # Tailwind directives & custom base styles
│   ├── main.tsx                 # Application entry point
│   └── vite-env.d.ts            # Vite environment variables type declarations
├── .env                         # Environment variables (Web3Forms Access Key)
├── index.html                   # HTML template with SEO & social tags
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Tailwind CSS theme configuration
├── tsconfig.json                # TypeScript compiler configuration
└── vite.config.ts               # Vite bundler configuration
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### Installation

1. **Navigate to project directory:**
   ```bash
   cd c:/my_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   A `.env` file is present in the root directory:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=d4b20470-60d0-4588-8530-c47f1c3bb59c
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with Hot Module Replacement (HMR) |
| `npm run build` | Runs TypeScript type checking (`tsc`) and compiles optimized production build to `/dist` |
| `npm run preview` | Locally previews the production build from `/dist` |

---

## 📬 Contact Form & Email Integration

The contact form uses [Web3Forms](https://web3forms.com/) for zero-backend email delivery:
1. When a client submits the form on your website, it posts securely to Web3Forms API.
2. An instant email notification containing the customer's name, email, phone number, service requested, and message is sent directly to **muthukumar41.dev@gmail.com**.
3. You can click **Reply** directly within your email to respond to the lead.

---

## 🌐 Deployment

This project can be deployed instantly to any modern hosting platform:

### Deploy to Vercel
1. Push this repository to GitHub / GitLab.
2. Import the project into [Vercel](https://vercel.com/).
3. Add the `VITE_WEB3FORMS_ACCESS_KEY` under **Environment Variables**.
4. Click **Deploy**.

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Set Build Command: `npm run build` and Publish Directory: `dist`.
3. Add `VITE_WEB3FORMS_ACCESS_KEY` in **Site Configuration > Environment Variables**.
4. Click **Deploy Site**.

### Deploy to Cloudflare Pages
1. Select repository in Cloudflare Pages dashboard.
2. Framework preset: `Vite`.
3. Build command: `npm run build`, Output directory: `dist`.
4. Add environment variables and deploy.

---

## 📄 Contact & Ownership

- **Brand**: MK Technology & Services
- **Owner**: Muthukumar
- **Role**: Full Stack Developer & AI/Data Solutions
- **Tagline**: *"Developing Solutions with minimal cost"*
- **Location**: Tirunelveli, Tamil Nadu, India
- **Email**: muthukumar41.dev@gmail.com
- **Phone**: +91 99433 98882
