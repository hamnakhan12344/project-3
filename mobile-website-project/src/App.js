import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Toolbar from "./components/Toolbar/Toolbar";
import BrandMobilesPage from "./pages/BrandMobilesPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="hidden xl:flex">
        <Toolbar />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="oppo" element={<BrandMobilesPage />} />
          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
