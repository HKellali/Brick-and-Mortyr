import "./Character.scss";
import Status from "./Status";
import { Link, useLoaderData } from "react-router-dom";
import { CharacterData } from "../../services/CharacterLoader";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Character = () => {
  const data = useLoaderData();
  const character = data as CharacterData;
  console.log(character);

  return (
    <div className="character">
      <div className="label">Character Info</div>
      <div className="wrapper">
        <Link to="/">
          <ArrowBackIcon></ArrowBackIcon>
        </Link>
        <div className="character-image">
          <img src={character.image} alt="" />
        </div>
        <div className="character-info">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td className="first">{character.name}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>
                  <Status status={character.status}></Status>
                </td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{character.gender}</td>
              </tr>
              <tr>
                <th>Species</th>
                <td>{character.species}</td>
              </tr>
              <tr>
                <th>Origin</th>
                <td>{character.origin.name}</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>{character.location.name}</td>
              </tr>
              <tr>
                <th>Appeared in</th>
                <td className="last">{character.episode.length} episodes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Character;
