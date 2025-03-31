import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import ProductReview from "./pages/ProductReview";
import OrderReview from "./pages/OrderReview";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import Prices from "./pages/Prices";
import Product from "./pages/Product";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product-review" element={<ProductReview />} />
                <Route path="/order-review" element={<OrderReview />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/prices" element={<Prices />} />
                <Route path="/product" element={<Product />} />
            </Routes>
        </Router>
    );
}

export default App;
