import { useLoaderData, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button/Button";

import { CharacterData } from "../../services/CharacterLoader/CharacterData";
import EpisodesModal from "../../components/EpisodesModal/EpisodesModal";
import Status from "./Status";

import "./Character.scss";

const Character = () => {
  const navigate = useNavigate();
  const previousPage = () => {
    const hasHistory = true;
    if (hasHistory) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  const data = useLoaderData();
  const character = data as CharacterData;

  return (
    <div className="character">
      <div className="label">Character Info</div>
      <div className="wrapper">
        <Button onClick={previousPage}>
          <ArrowBackIcon />
        </Button>
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
                <td className="last">
                  <EpisodesModal episodes={character.episode} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Character;
