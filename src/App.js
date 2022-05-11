import "./App.css";
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
    </div>
  );
}

export default App;
