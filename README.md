# IGRS Redesign Project

This project is a redesign of the official Indonesia Game Rating System (IGRS) website, available at [igrs.id](https://igrs.id/). It encompasses comprehensive improvements across UI/UX, Frontend, and Backend to provide a more modern, intuitive, and informative experience for users.

## Project Highlights
- **Precision Slicing:** The user interface (UI) implementation was completed with high accuracy, fully aligning with the designed Figma mockups.
- **Modern & Responsive Design:** Delivers a highly modern user interface with harmonious color palettes, micro-interactions, and full compatibility across various devices (mobile, tablet, and desktop).
- **Independent Infrastructure:** Solid Backend development with a structured database schema and RESTful API documentation using Swagger, ensuring smooth and secure data flow from the server to the interface.
- **Optimal Performance:** Utilizes Vite and other modern technologies on the client side, along with optimized folder structures and robust component-level error handling.

## Key Features
- **Game Catalog:** A comprehensive list of games with a search filter based on game name and age rating categories.
- **Detailed Rating Information:** A dedicated page explaining each age and content classification in detail, complete with descriptions and metrics on the number of registered games in each category.
- **Game Details:** Displays detailed specifications of a game, including cover art, developer/publisher information, content classification tags, visual screenshots (gallery), and user review summaries.
- **Articles & News:** A dynamically presented blog module providing the latest information on IGRS developments and the gaming industry in general.
- **Integrated Error Handling:** A professional and user-friendly fallback interface when the connection to the backend is lost or when data fails to load (ensuring users do not see a broken UI).

## Core Technologies
This project was built in a modern development environment using a decoupled client-server architecture.

### Frontend
- **React & Vite:** The core of the frontend application, providing blazing-fast development (HMR) and runtime performance.
- **Tailwind CSS:** A utility-first styling framework to accelerate the development of aesthetically consistent visual designs.
- **React Router:** Manages declarative routing and navigation for a seamless Single-Page Application (SPA) experience.
- **Lucide React & Swiper:** Third-party modular components for modern icon assets and interactive slider functionalities.

### Backend
- **Node.js & Express:** Builds a reliable, flexible, and responsive RESTful API.
- **Prisma ORM:** Manages the relational database schema structure and handles query interactions with type-safety protection.
- **Swagger:** Automatically generates interactive API documentation, serving as a valid contract between the FE and BE architectures.

## Directory Structure
- `fe/` - Specific directory for the entire Frontend interface (React/Vite).
- `be/` - Specific directory for Backend services and data logic (Express/Prisma).

> **Important Note:** Technical details of the folder structure, specific installation guides, and commands to run each part (Frontend and Backend) are documented separately in the README of their respective subfolders. Please refer to `fe/README.md` and `be/README.md` for more detailed information.

## Important Links
- **Deployment Link:** [https://igrs-redesign.vercel.app/](https://igrs-redesign.vercel.app/)

## Development Team
This collaborative project was developed, designed, and completed by a highly dedicated team:
- **M. Rabyndra Janitra Binello** - Frontend Engineer
- **Khalifa Al hasan** - Backend Engineer
- **Riza Aqilah Nashifah** - UI/UX Designer
