🚀 StoreFront — Modern Ecommerce Frontend (Internship Project)

A modern, responsive ecommerce frontend built using Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.
This project was created as part of an internship assignment to demonstrate real-world application development, component structuring, routing, and UI/UX design skills.

🌟 Features
🏬 Store Listing Page

Displays all stores in a responsive grid layout

Store cards include:

Image

Name

Category

Rating

Smooth hover animations

Fully responsive UI

🏪 Dynamic Store Details Page

For every store:

Details rendered dynamically using route:

/stores/[storeId]


Store banner + info

Product list for that store

Clean layout for better shopping experience

🛒 Product System

Product cards with image, price, and name

Dynamic product fetching based on storeId

Typescript typing ensures consistency and safety

🎨 UI/UX Implementation

Built with modern reusable components from shadcn/ui

TailwindCSS for sleek layouts

Hover effects, shadows, transitions

Fully mobile-friendly interface

🧱 Tech Stack

Next.js 14 (App Router)

TypeScript

Tailwind CSS

shadcn/ui Components

lucide-react Icons

📁 Project Structure
store-front/
├── src/
│   ├── app/
│   │   ├── stores/
│   │   │   ├── page.tsx
│   │   │   └── [storeId]/page.tsx
│   │   └── layout.tsx
│   ├── components/
│   │   ├── store/
│   │   │   └── store-card.tsx
│   │   ├── product/
│   │   └── shared/
│   └── lib/
│       └── types.ts
└── README.md

🧪 Type Safety

Project uses strict TypeScript with well-defined entities:

🧷 Example Types Included:

Store

Product

User

Order

CartItem

This ensures reliable, predictable data across the app.

🛠️ How to Run the Project
1. Install Dependencies
npm install

2. Run the Development Server
npm run dev

3. Open in Browser
http://localhost:3000

✨ Time Breakdown

UI Components: 2 hours

Routing + Dynamic Pages: 1 hour

TypeScript Models: 20 min

Styling + Layout: 1 hour

Debugging + Config Fixes: 40 min

Final Documentation: 15 min

🚀 Future Enhancements

Complete Cart & Checkout flow

Firebase Authentication (Login/Signup)

Store Owner Dashboard

Product Management System

Real backend API integration

Search + Filters

Wishlist feature

📌 Submission

All source code, components, types, and routing are included and documented.
This repository demonstrates frontend architecture, clean UI design, and component reusability.

📝 Professional Commit Messages

Use these for clean repo history:

feat: create store listing page with responsive UI
feat: implement dynamic store page using params
feat: add store card component with image, rating and category
feat: integrate product listing inside store page
chore: fix TypeScript types and config errors
style: improve UI spacing and hover animation
refactor: clean folder structure and component naming
docs: add professional README for GitHub
