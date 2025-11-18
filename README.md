# Vite + React SDK Demo

This project is a demonstration of a modern React application built with Vite. It showcases a robust and scalable project structure that includes Redux for state management, TanStack Query for data fetching, and Tailwind CSS for styling.

## Project Overview

This project is a boilerplate for building React applications. It comes with a pre-configured set of tools and a project structure that is designed to be easy to understand and extend. The demo includes examples of how to handle authentication, fetch data from an API, and manage application state.

## Technologies Used

- **Vite:** A fast build tool that provides a lightning-fast development experience.
- **React:** A JavaScript library for building user interfaces.
- **Redux Toolkit:** The recommended way to write Redux logic. It simplifies store setup and reduces boilerplate code.
- **TanStack Query:** A powerful data-fetching library for React. It handles caching, background refetching, and stale data, making it easy to manage server state.
- **React Router:** A library for handling routing in a React application.
- **Axios:** A promise-based HTTP client for the browser and Node.js.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Lucide React:** A library of beautiful and consistent icons.

## Project Structure

The project is organized into the following directories:

```
vite-project/
├── public/
│   └── vite.svg
└── src/
    ├── api/
    │   └── axios.js
    ├── app/
    │   ├── _components/
    │   │   └── PrivateRoute.jsx
    │   ├── features/
    │   │   ├── auth/
    │   │   │   └── authSlice.js
    │   │   └── ui/
    │   │       └── uiSlice.js
    │   ├── hooks/
    │   │   └── useLogout.js
    │   ├── pages/
    │   │   ├── ListPage.jsx
    │   │   └── LoginPage.jsx
    │   ├── queries/
    │   │   ├── posts.js
    │   │   └── products.js
    │   └── store.js
    ├── assets/
    │   └── react.svg
    ├── components/
    │   └── ui/
    │       └── button.jsx
    ├── lib/
    │   └── utils.js
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

- **`src/api`:** Contains the Axios instance used for making API requests.
- **`src/app`:** This is the core of the application.
  - **`features`:** Contains Redux slices for different features of the application.
  - **`hooks`:** Contains custom hooks.
  - **`pages`:** Contains the main pages of the application.
  - **`queries`:** Contains custom hooks for data fetching with TanStack Query.
  - **`store.js`:** The Redux store configuration.
- **`src/components`:** Contains reusable UI components.
- **`src/lib`:** Contains utility functions.

## Getting Started

To get started with this project, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Install dependencies:**

    ```bash
    cd vite-project
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the development server at `http://localhost:3000`.

## State Management with Redux

This project uses Redux Toolkit for state management. The Redux store is configured in `src/app/store.js`.

The `authSlice` in `src/app/features/auth/authSlice.js` is an example of how to create a slice to manage authentication state. It includes actions for setting the user's token, setting the user's data, and logging out.

## Data Fetching with TanStack Query

TanStack Query is used for fetching and managing server state. The `src/app/queries` directory contains custom hooks for data fetching.

The `posts.js` file in `src/app/queries/posts.js` provides an example of how to create custom hooks for fetching and creating posts. The `usePosts` hook fetches a list of posts, and the `useCreatePost` hook provides a function for creating a new post.

## Routing

Routing is handled by `react-router`. The routes are defined in `src/App.jsx`.

## Styling

This project uses Tailwind CSS for styling. The Tailwind configuration is in `tailwind.config.js`. The base styles are in `src/index.css`.
