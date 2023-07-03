import "./Home.scss";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useLoaderData } from "react-router-dom";
import { CharacterCardData } from "../../services/CharacterCardLoader";

type CharactersData = {
  info: object;
  results: object;
};

const Home = () => {
  const data = useLoaderData() as CharactersData;
  const characters = data.results as CharacterCardData[];

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
