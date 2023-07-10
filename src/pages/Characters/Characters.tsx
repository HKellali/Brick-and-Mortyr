import "./Characters.scss";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { CharacterCardData } from "../../services/CharactersLoader/CharacterCardData";
import Pagination from "../../components/Pagination/Pagination";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

type CharactersData = {
  info: {
    pages: string;
  };
  results: object;
  error: string;
};

const Characters = () => {
  function getAdress(page, name) {
    let adress = "https://rickandmortyapi.com/api/character/?page=";
    adress += page;
    adress += name ? "&name=" + name : "";
    return adress;
  }
  const queryParameters = new URLSearchParams(useLocation().search);

  const params = {
    name: queryParameters.get("name"),
    page: queryParameters.get("page")
      ? parseInt(queryParameters.get("page")!)
      : "1",
  };
  const adress = getAdress(params.page, params.name);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState("0");
  useEffect(() => {
    fetch(adress)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setPages(data.info.pages);
        setLoading(false);
      });
  }, [useLocation()]);
  if (loading) {
    return (
      <div className="characters">
        <Loading></Loading>
      </div>
    );
  }
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
