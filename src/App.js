import "./App.css";
import Card from "./Cards/Card";
import Hero from "./Hero/Hero";
import Home from "./Home/Home";

import Product from "./Products/Product";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Card />
      <Product />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
