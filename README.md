# 🌼 Donezo - Modern Task Management Dashboard

**Donezo** is a task management dashboard built with React, focusing on clean design and a responsive user experience. This project was developed as a frontend internship assignment, where I implemented a modular structure, interactive animations, and efficient data handling to ensure a smooth and professional dashboard experience.

🚀 **Live Deployment:** [https://donezo-dashboard-beta.vercel.app/](https://donezo-dashboard-beta.vercel.app/)

---

## 🌟 Key Features

- **Advanced Authentication**: Secure login system using JWT tokens stored in browser cookies for persistent sessions.
- **Dynamic Dashboard**: Real-time data visualization with highly customized charts and interactive overview stats.
- **Protected Routing**: Robust Private Route implementation to prevent unauthorized access.
- **Side-Panel Architecture**: Modular side-panel (drawer) system for adding products and users without leaving the context of the page.
- **Interactive Modals**: Seamless "Start Meeting" form integration using React Portal patterns and Framer Motion transitions.

---

## 🏆 Extra Engineering & Bonus Tasks

- **3D Immersive Design**: Integrated **Three.js** on the login page with a custom `LightPillar` animation for a premium user experience.
- **Maximum Performance Optimization**:
  - **Route & Component Level Lazy Loading**: Used `React.lazy` and `Suspense` to reduce initial bundle size.
  - **Memoization Strategy**: Implemented `React.memo`, `useCallback`, and `useMemo` specifically on charts and lists to prevent unnecessary re-renders.
  - **TanStack Query 'Select' Pattern**: Fetched all dashboard data in a single API call but used the `select` pattern to split data slices, ensuring components only update when their specific data changes.
- **Aesthetic Skeleton Loaders**: Designed custom skeleton states to improve **Perceived Performance** during data fetching.
- **Token Persistence**: Integrated `js-cookie` for secure and professional session management.

---

## 🛠️ Technology Stack

| Category             | Tech/Library                   |
| :------------------- | :----------------------------- |
| **Framework**        | React 19 (Vite)                |
| **Styling**          | Tailwind CSS + DaisyUI         |
| **Animation**        | Framer Motion + Three.js       |
| **State Management** | TanStack Query (v5)            |
| **Form Handling**    | React Hook Form                |
| **Icons & UI**       | Lucide React + Sonner (Toasts) |
| **HTTP Client**      | Axios (with Interceptors)      |

---

## 🧠 Technical Challenges & Creative Solutions

### 1. The "Perfect" Pie Chart Stacking

Matching the Dribbble design's specific "stacked/rounded" pie chart was challenging. I solved this by:

- Mathematically calculating and adjusting the `startAngle` and `endAngle`.
- Implementing a `swap` flag logic to ensure the segments rounded towards the correct visual direction, maintaining the strict pixel-perfect aesthetic.

### 2. Bar Chart Custom Striped Background

The original design featured a unique striped background behind the bars.

- **Solution**: Instead of using basic CSS, I created and injected a custom **SVG Pattern** within the Recharts SVG tree. This required precise coordinate matching to ensure the stripes remained responsive and aligned with the axis.

### 3. Layout Shift Prevention with Framer Motion

Animating complex layouts often causes "Layout Shifts" which hurts UX.

- **Solution**: Used `AnimatePresence` and defined strict `key` attributes. Combined with **Skeleton Loaders**, I ensured that the entrance animations feel fluid and never cause the UI to "jump" when the data arrives.

### 4. Customizing Three.js for Production

Implementing a 3D Light Pillar in a 2D dashboard flow was a performance risk.

- **Solution**: Heavily customized the Three.js component to handle device pixel ratios and added logic to pause the animation when the component is unmounted to save GPU/CPU resources.

---

## 📦 Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Shaqibul-Neil/Donezo-Dashboard.git
   cd donezo-dashboard
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your API URL:

   ```env
   VITE_API_URL=********************
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

Developed with a focus on **Separation of Concerns (SoC)**:

- `src/components`: Atomized, reusable UI components.
- `src/hooks`: Custom hooks for data fetching and auth logic.
- `src/context`: Auth provider for global user state.
- `src/routes`: Centralized routing with private route guards.
- `src/layout`: Wrapper components for persistent UI (Sidebar/Navbar).

---

## Developed with ❤️ by **[Md. Shaqibul Islam]**.
