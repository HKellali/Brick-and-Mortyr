import { Link } from "react-router-dom";

interface Props {
  name: string;
  id: string;
}

const CharacterCard = ({ name, id }: Props) => {
  return (
    <Link to={"/character/" + id}>
      <div>Name : {name}</div>
    </Link>
  );
};

export default CharacterCard;
