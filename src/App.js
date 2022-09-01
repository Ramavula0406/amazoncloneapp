import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/CartList/Cart";
import PageNotFound from "./components/UI/PageNotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/checklist" element={<Cart />}></Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<h2>Login Page</h2>} />
      </Routes>
    </>
  );
}

export default App;
