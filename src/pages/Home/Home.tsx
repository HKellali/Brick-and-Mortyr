import "./Home.scss";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const adress = "https://rickandmortyapi.com/api/character";
  const fetchCharactersData = () => {
    fetch(adress)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
      });
  };

  useEffect(() => {
    fetchCharactersData();
  }, []);

  return (
    <div className="home">
      {characters.length > 0 && (
        <div className="wrapper">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              id={character.id}
            ></CharacterCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
