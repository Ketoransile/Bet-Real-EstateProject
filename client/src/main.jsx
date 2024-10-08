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
        domain="dev-3u03a67skwnv6f7u.us.auth0.com"
        clientId="WQlNnOUMn8WMUfLyRLQCfprzyTiWZI5U"
        authorizationParams={{
          redirect_uri: "https://bet-real-estate.vercel.app/",
        }}
        audience="http://localhost:8000"
        scope="openid profile email"
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </MantineProvider>
);
