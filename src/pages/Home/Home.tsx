import "./Home.scss";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useLoaderData } from "react-router-dom";
import { CharacterCardData } from "../../services/CharacterCardLoader";
import Pagination from "../../components/Pagination/Pagination";

type CharactersData = {
  info: object;
  results: object;
  error: string;
};

const Home = () => {
  const data = useLoaderData() as CharactersData;
  const characters = data.error ? [] : (data.results as CharacterCardData[]);

  return (
    <div className="home">
      <div className="wrapper">
        {characters.length > 0 ? (
          <div className="content">
            <Pagination></Pagination>
            <div className="grid">
              {characters.map((character) => (
                <CharacterCard
                  key={character.id}
                  image={character.image}
                  name={character.name}
                  id={character.id}
                ></CharacterCard>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty">Nothing to see here!</div>
        )}
      </div>
    </div>
  );
};

export default Home;
