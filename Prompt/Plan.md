# 🚀 Implementation Plan: Personal Portfolio (IT Generalist Edition)

Rencana ini menggabungkan **Konten Strategis** (agar terlihat seperti Mid-Level Dev) dengan **Desain Dark SaaS** (agar terlihat modern & profesional).

## 🛠 Tech Stack & Configuration

- **Framework:** Next.js 15 (App Router).
- **Styling:** Tailwind CSS (Utility-first).
- **Icons:** Lucide React (Clean & Technical).
- **Font:** `Inter` (Body) & `JetBrains Mono` (Code/Tags).
- **Deployment:** GitHub Pages (Static Export).
- **Animation:** Framer Motion (untuk interaksi halus, opsional).

## 🎨 Design System (The "Dark SaaS" Vibe)

- **Background:** `#0B1120` (Deep Blue/Gray - Slate 950).
- **Surface/Cards:** `#1E293B` (Slate 800) dengan border tipis `#334155`.
- **Primary Accent:** `#10B981` (Emerald 500) - _Solid, No Gradient_.
- **Text:** `#F8FAFC` (White) untuk Headings, `#94A3B8` (Slate 400) untuk body text.

---

## 📂 Phase 1: Data Structuring (The Content Engine)

Kita tidak akan menaruh teks langsung di HTML. Kita akan buat file `data/portfolio.ts` agar mudah diupdate. Ini mencakup semua poin dari saranmu:

1.  **Hero:** Name, Role (`Informatics Student | Robotics | AI`), Tagline, CTA.
2.  **About:** Storytelling, Stats (IPK, Projects Completed).
3.  **Skills:** Categories (Languages, Web, AI/Data, Robotics, Soft Skills).
4.  **Projects:** Array of objects (Title, Desc, Tech Stack, Repo Link, Demo Link, Image).
    - _Featured:_ E-Commerce (Laravel), Lung Cancer Class. (ML), Robotics Control (IoT).
5.  **Experience:** Timeline format.
6.  **Education:** UNS details & Relevant Coursework.
7.  **Certifications:** List format.
8.  **Contact:** Social Links.

---

## 🧱 Phase 2: Component Architecture

### 1. `Navbar.tsx`

- **Style:** Fixed, Glassmorphism (blur backdrop).
- **Items:** Logo (Text), Links (About, Projects, Experience), CTA Button (Contact).

### 2. `HeroSection.tsx`

- **Layout:** Split Screen (Text Kiri, Visual Kanan).
- **Content:**
  - H1: "Building Digital Solutions & Intelligent Systems."
  - Sub: "Informatics Student at UNS. Merging Web Dev, AI, and Robotics."
  - **Visual:** Foto profil dengan elemen "Floating Cards" (seperti referensi) yang berisi stats singkat.

### 3. `BentoGrid.tsx` (Untuk About & Skills)

- Menggunakan layout kotak-kotak (grid) yang rapi untuk menampilkan:
  - Box 1: About Me (Story).
  - Box 2: Tech Stack (Icons).
  - Box 3: Soft Skills.
  - Box 4: Focus Area (AI/Web/Robotics).

### 4. `ProjectCard.tsx`

- **Style:** Minimalist Card dengan screenshot besar.
- **Feature:** Hover effect (border menyala warna hijau).
- **Tags:** Menampilkan tech stack (misal: "Python", "Laravel") dengan gaya _badge_.

### 5. `ExperienceTimeline.tsx`

- Garis vertikal sederhana dengan poin-poin pengalaman organisasi/magang.

### 6. `Footer.tsx`

- Simple & Clean. Copyright + Social Links.

---

## 🤖 Prompt for AI Agent (Copy & Paste This)

Gunakan prompt ini di Cursor/Windsurf/Copilot. Prompt ini sudah mencakup instruksi desain dan struktur konten yang kamu minta.

**Prompt:**

```text
Act as a Senior Frontend Developer. I need to build a high-performance personal portfolio using **Next.js (App Router)**, **Tailwind CSS**, and **Lucide React**.

**1. Context & Persona:**
The portfolio is for an **Informatics Student & IT Generalist** (Web Dev, AI/ML, Robotics) based in Indonesia. The goal is to look like a "Mid-Level Developer," not just a student.

**2. Design Language ("Dark SaaS" Style):**
* **Reference:** Clean, minimalist, flat design (NO gradients).
* **Colors:** Background `Slate-950`, Cards `Slate-900` with subtle borders (`Slate-800`), Accent Color `Emerald-500` (Neon Green) for buttons/highlights.
* **Typography:** 'Inter' for UI, 'JetBrains Mono' for technical terms.

**3. Required Sections (Single Page Scroll):**
Create a `data/portfolio.ts` file first to store all text, then map it to these components:

* **Navbar:** Sticky, blur effect. Links: About, Projects, Experience, Contact.
* **Hero Section:**
    * Headline: "Informatics Student | Robotics Programmer | Web & AI Enthusiast".
    * Sub-headline: Professional summary (1-2 sentences).
    * Buttons: "View Projects" (Primary), "Download CV" (Secondary).
    * Visual: Profile photo with floating "Stat Cards" (e.g., "3+ Years Coding", "UNS Student").
* **About Me:** concise storytelling, mentioning specific interests in AI & Automation.
* **Skills (Bento Grid Layout):** Grouped by Technical (Languages, Web, AI, Robotics) and Soft Skills. Use a grid layout to display these.
* **Featured Projects (The Core):**
    * Display 3 main projects: E-Commerce Dashboard (Laravel), Lung Cancer Classification (ML), Robotics Project (C++/IoT).
    * Each card must have: Title, Description (Problem & Solution), Tech Stack Tags, and Links (GitHub/Demo).
* **Experience & Education:** A vertical timeline component showing Education (Universitas Sebelas Maret) and any organizational/internship experience.
* **Footer:** "Let's work together", Social Links, and Copyright.

**4. Technical Constraints:**
* Use `output: 'export'` in `next.config.js` for GitHub Pages deployment.
* Use `next/image` with `unoptimized: true`.
* Ensure the design is fully responsive (Mobile First).

**Action:**
Please initialize the project, set up the `tailwind.config.ts` with the color palette, create the `data/portfolio.ts` with placeholder data based on the persona, and build the `Hero` and `Navbar` components first.
```
