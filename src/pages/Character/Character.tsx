import "./Character.scss";
import Status from "./Status";
import { useLoaderData } from "react-router-dom";
import { CharacterData } from "../../services/CharacterLoader";

const Character = () => {
  const data = useLoaderData();
  const character = data as CharacterData;

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
