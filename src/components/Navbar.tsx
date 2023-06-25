import { FC } from "react";
import pokemonLogo from "../assets/pokemonLogo.png";
import "./Navbar.css";

const Navbar: FC = () => {
  return (
    <div>
      <div className="background-nav">
          <img className="pokemonLogo" src={pokemonLogo} alt="pokemonLogo" />
      </div>
    </div>
  );
};

export default Navbar;
