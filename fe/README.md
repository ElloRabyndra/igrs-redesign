# IGRS Redesign - Frontend

This repository contains the client-side (Frontend) source code of the IGRS Redesign project. This application was built to demonstrate a modern interface precision-sliced directly from UI/UX designs, prioritizing high performance, code modularity, and clean architecture.

## Core Technologies

- **React 19:** A component-based interface library for rendering interactive UIs.
- **Vite:** A next-generation, blazing-fast build tool and bundler that ensures an instant development experience (HMR) and production build.
- **Tailwind CSS v4:** Used extensively for agile and uniform interface styling.
- **React Router v7:** Handles client-side routing mechanisms to optimize the standard Single-Page Application (SPA) navigation experience.
- **Lucide React:** A premium aesthetic SVG icon asset library.
- **Swiper:** Handles dynamic touch-interactive carousel/slider functionality on visual components like the hero banner and game galleries.

## Directory Structure

The project is organized with centralized management within the `src` root directory, neatly separating functionalities based on their context:

```text
src/
├── assets/          # Stores static assets like local images (.png, .jpg) and illustrations (Non-API).
├── components/      # A collection of modular React components (split into `layout`, `sections`, and `ui` for base/skeleton components).
├── pages/           # Top-level View components representing entire pages (directly interfacing with the router).
├── routing/         # The central `react-router` configuration declaration managing navigation from URL paths.
├── service/         # Centralized backend API endpoint abstraction module, encapsulating data-fetching function executions.
├── utils/           # Separated pure utility logic functions (like `helpers.js`, `constants.js`) for reusability across components.
├── index.css        # The central stylesheet, location for `@tailwind` declarations and custom brand color variables.
└── main.jsx         # The vital entry point where the initial React application is mounted to the browser's DOM structure.
```

## Technical Details & Functionalities

1. **State Management & Data Fetching:** 
   State handling relies on React's standard built-in API Hooks (such as `useState`, `useEffect`, `useMemo`), tightly integrated sequentially with the separate utility function module layer `service/api.js` which abstracts Fetch API requests.
2. **Skeleton Loading & Error Handling:** 
   Anticipating delayed UI shifts due to waiting for data responses, the application renders a simulated skeleton loader structure to prevent Cumulative Layout Shift (CLS) issues. As a defense layer for interface security, if an API response fails, the application implements a centralized interactive warning module (the `ErrorState.jsx` component)—presenting an interactive `retry` option rather than merely displaying an empty, formless page component.
3. **Environment Variable Configuration:**
   The server endpoint base URL is injected dynamically using Vite's environment capabilities (`.env`). Referential data is accessed securely via the `import.meta.env.VITE_API_URL` syntax, allowing for safe integration and transition towards the production operational environment.

## Guide to Running Locally

### Prerequisites
- **Node.js** installed (latest or equivalent version recommended).
- **Backend** system is recommended to be initialized operationally at the same time (to support optimal dynamic API data display functionality).

### Installation & Execution

1. Navigate your terminal's working directory to the specific FE installation root:
   ```bash
   cd fe
   ```
2. Install all required package dependencies (via NPM):
   ```bash
   npm install
   ```
3. Inject Environment Variables.
   Copy the template, or create an explicit `.env` file in the specific `fe/` root. Write its reference pointing to the appropriate API server. (Adjust the port configuration if the local Backend server is different).
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```
4. Start the instant injection development mode server:
   ```bash
   npm run dev
   ```
5. Access the rendered result in your client browser application. Vite will automatically initialize the browser by default at `http://localhost:5173/`.
