import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const apollo = new ApolloClient({
  uri: "https://spacex-production.up.railway.app",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
