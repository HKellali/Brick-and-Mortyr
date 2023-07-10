import "./Character.scss";
import Status from "./Status";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button/Button";
import EpisodesModal from "../../components/EpisodesModal/EpisodesModal";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { CharacterData } from "../../services/CharacterLoader/CharacterData";

const adress = "https://rickandmortyapi.com/api/character";

const Character = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const previousPage = () => {
    navigate(-1);
  };

  const [character, setCharacter] = useState<CharacterData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(adress + "/" + id)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="character">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div className="character">
      <div className="label">Character Info</div>
      {!loading && (
        <div className="wrapper">
          <Button onClick={previousPage}>
            <ArrowBackIcon></ArrowBackIcon>
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
                    <EpisodesModal episodes={character.episode}></EpisodesModal>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
