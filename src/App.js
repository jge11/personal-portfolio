import './App.css';
import { Banner } from "./components/Banner.js";
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
