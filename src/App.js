import "./App.css";
import Blog from "./components/Blog";
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
      <Blog />
    </div>
  );
}

export default App;
