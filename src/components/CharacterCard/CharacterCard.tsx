import { Link } from "react-router-dom";
import { CharacterCardData } from "../../services/CharacterCardLoader";
import "./CharachterCard.scss";

const CharacterCard = (character: CharacterCardData) => {
  return (
    <div className="character-wrapper">
      <Link to={"/character/" + character.id}>
        <img src={character.image} alt="" />
        <div className="character-info">{character.name}</div>
      </Link>
    </div>
  );
};

export default CharacterCard;
