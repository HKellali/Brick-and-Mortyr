import { Link } from "react-router-dom";
import { CharacterCardData } from "../../services/CharacterCardLoader";

const CharacterCard = (character: CharacterCardData) => {
  return (
    <div className="character-wrapper">
      <Link to={"/character/" + character.id}>
        <div>Name : {character.name}</div>
      </Link>
      <img src={character.image} alt="" />
    </div>
  );
};

export default CharacterCard;
