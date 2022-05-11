import "./App.css";
import Brands from "./components/Brands";
import Carousel from "./components/Carousel";
import Collection from "./components/Collection";
import Navbar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Products />
      <Collection />
      <Brands />
    </div>
  );
}

export default App;
