import { FC, useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const [datas, setDatas] = useState([]);

  interface Data {
    name: string;
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((res) => setDatas(res.results));
  }, []);

  return (
    <div className="background-img">
      <div className="band-home">
        {datas.length > 0
          ? datas.map((data: Data, index: number) => (
              <Link className="card-home" key={index} to={`/home/${index+1}`}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                    index + 1
                  }.png`}
                  alt="pokemonImg"
                />
                <span>{data.name.toUpperCase()}</span>
              </Link>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};

export default Home;
