// Import necessary libraries and components
import React from "react";
import ReactDOM from "react-dom/client"; // Importing ReactDOM from its client module
import { BrowserRouter } from "react-router-dom"; // A React component to manage client-side routing
import "./index.css"; // Importing the main stylesheet for the application
import App from "./App"; // Importing the main App component
import { Provider } from "react-redux"; // Redux Provider to give React components access to the store
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"; // Importing React Query components for data fetching and state management

import store from "./store"; // Importing the Redux store

// Creating a new instance of QueryClient for React Query
const queryClient = new QueryClient();

// Creating a React root from an HTML element with the id "root"
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering our main app wrapped with necessary providers
root.render(
  // Using "BrowserRouter" to manage routing for our React application

  // Wrapping the app with the Redux "Provider" to give components access to the Redux store

  // Providing the "QueryClient" instance to our application to handle data-fetching and caching with React Query

  // Rendering the main "App" component
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
