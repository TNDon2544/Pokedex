import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home">
          <Route path=":pokemonId" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
