import "./Characters.scss";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useLoaderData } from "react-router-dom";
import { CharacterCardData } from "../../services/CharactersLoader/CharacterCardData";
import Pagination from "../../components/Pagination/Pagination";

type CharactersData = {
  info: {
    pages: string;
  };
  results: object;
  error: string;
};

const Characters = () => {
  const data = useLoaderData() as CharactersData;
  const characters = data.error ? [] : (data.results as CharacterCardData[]);
  const pages = data.error ? "0" : data.info.pages;

  return (
    <div className="characters">
      <div className="wrapper">
        {characters.length > 0 ? (
          <div className="content">
            <Pagination pages={pages}></Pagination>
            <div className="grid">
              {characters.map((character) => (
                <CharacterCard
                  key={"card" + character.id}
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

export default Characters;
