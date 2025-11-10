import "./App.scss";
import NavBar from "./components/NavBar";
import Home from "./components/home/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar selectedItem="Home" />
      <Home />
      <Footer />
    </>
  );
}

export default App;
