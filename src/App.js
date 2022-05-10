import "./App.css";
import Carousel from "./components/Carousel";
import Navbar from "./components/NavBar";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Products />
    </div>
  );
}

export default App;
