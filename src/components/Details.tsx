import { FC, useState, useEffect } from "react";
import "./Details.css";
import pokemonBg from "../assets/pokemon_bg.png";
import pokemonCircle from "../assets/pokemon_circle_bg.png";
import pokedex from "../assets/pokedex.png";
import { Link, useParams } from "react-router-dom";

const Details: FC = () => {
  let { pokemonId } = useParams();
  const [datas, setDatas] = useState<Data | null>(null);
  const formsData: Data[] = datas?.forms || [];
  interface Ability {
    ability: {
      name: string;
    };
  }

  interface Data {
    abilities: Ability[];
    forms: [];
    height: number;
    weight: number;
    types: [];
    name: string;
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((res) => setDatas(res));
  }, []);

  if (!datas) {
    return <p>Loading...</p>;
  }

  return (
    <div className="background-img-details">
      <div className="pokedex-box">
        <Link to="/home">
          <img className="pokedex" src={pokedex} alt="pokedex" />
        </Link>
      </div>

      <div className="name-detail">{formsData[0].name.toUpperCase()}</div>

      <div className="pokemon-img-detail">
        <img className="pokemon-bg" src={pokemonBg} alt="pokemonBg" />
        <img
          className="pokemon-circle"
          src={pokemonCircle}
          alt="pokemonCircle"
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`}
          alt="pokemonImg"
          className="pokemon"
        />
        <div className="pokemon-info">
          <div className="pokemon-info-height">
            <span className="info-title">Height</span>
            <br />
            <span className="height-detail">{datas.height}</span>
          </div>
          <div className="pokemon-info-weight">
            <span className="info-title">Weight</span>
            <br />
            <span className="weight-detail">{datas.weight}</span>
          </div>
        </div>
      </div>
      <span className="ability-title">ABILITY</span>
      <div className="pokemon-ability">
        {datas.abilities.map((a: Ability, index: number) => (
          <div className="ability-detail" key={index}>
            {a.ability.name.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="pokemon-type">
        {datas.types.map((t: { type: { name: string } }, index: number) => (
          <div
            className={`${t.type.name.toLowerCase()}-type-detail`}
            key={index}
          >
            {t.type.name.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
