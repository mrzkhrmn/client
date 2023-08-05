import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/products" element={<ProductPage />}></Route>
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
