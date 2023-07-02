import { Link } from "react-router-dom";

interface Props {
  image: string;
  name: string;
  id: string;
}

const CharacterCard = ({ image, name, id }: Props) => {
  return (
    <div className="character-wrapper">
      <Link to={"/character/" + id}>
        <div>Name : {name}</div>
      </Link>
      <img src={image} alt="" />
    </div>
  );
};

export default CharacterCard;
