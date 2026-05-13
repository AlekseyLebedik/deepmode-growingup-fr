import {
  BrowserRouter,
  Routes as ExternalRoutes,
  Route,
} from "react-router-dom";

import { MainLayout, AuthLayout } from "@/pages/layout";
import { OrdersPage } from "@/pages/orders";
import { ProductsPage } from "@/pages/products";

export function Routes() {
  return (
    <BrowserRouter>
      <ExternalRoutes>
        <Route path="/" element={<MainLayout />}>
          <Route path="orders" element={<OrdersPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<OrdersPage />} />
          <Route path="logout" element={<ProductsPage />} />
        </Route>
      </ExternalRoutes>
    </BrowserRouter>
  );
}
