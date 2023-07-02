import "./Character.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Status from "./Status";

const Character = () => {
  const params = useParams();
  const [character, setCharacter] = useState<any>([]);
  const adress = "https://rickandmortyapi.com/api/character/" + params.id;
  const fetchCharacterData = () => {
    fetch(adress)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacter(data);
      });
  };

  useEffect(() => {
    fetchCharacterData();
  }, []);

  return (
    <div className="character">
      <div className="wrapper">
        <div className="charachter-image">
          <img src={character.image} alt="" />
        </div>
        <div className="character-info">
          <table>
            <tbody>
              <tr>
                <td>Name : {character.name}</td>
              </tr>
              <tr>
                <td>
                  Status : <Status status={character.status}></Status>
                </td>
              </tr>
              <tr>
                <td>Gender : {character.gender}</td>
              </tr>
              <tr>
                <td>Species : {character.species}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Character;
