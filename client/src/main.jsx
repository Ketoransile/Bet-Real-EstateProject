import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <React.StrictMode>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN || "dev-3u03a67skwnv6f7u.us.auth0.com"}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID || "WQlNnOUMn8WMUfLyRLQCfprzyTiWZI5U"}
        authorizationParams={{
          redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI || window.location.origin,
        }}
        audience={import.meta.env.VITE_AUTH0_AUDIENCE || "http://localhost:8000"}
        scope="openid profile email"
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </MantineProvider>
);
