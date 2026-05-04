import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/orders/Orders";
import ProductsPage from "./pages/products/Products";
import LayoutPage from "./pages/layout/Layout";
import AuthProvider from "./pages/layout/Auth";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="orders" element={<OrdersPage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
        <Route path="/auth" element={<AuthProvider />}>
          <Route path="login" element={<OrdersPage />} />
          <Route path="logout" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
