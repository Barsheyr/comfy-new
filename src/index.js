import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain="dev-wkr7guyr7h3j67f8.us.auth0.com"
    clientId="tZ8uz32VlJVHVoq9Odc2UaN5Y9ZbjnkR"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
