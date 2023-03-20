import { Route, Routes, useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MyCard from "./pages/MyCard";
import MyOrders from "./pages/MyOrders";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />

        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/my-card" element={<MyCard />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
      <StyledButton onClick={() => navigate(-1)}>Go back</StyledButton>
      <GlobalStyle />
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
    body {
      background-color: #ece6f1;
    }

  `;

const StyledButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  text-decoration: none;
  font-size: 20px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: #0dc2b9;
  border-radius: 20px;

  :hover {
    background-color: #0caea6;
  }
`;
