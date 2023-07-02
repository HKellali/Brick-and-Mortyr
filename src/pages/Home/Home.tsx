import "./Home.scss";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <CharacterCard name="Test" id="1"></CharacterCard>
      </div>
    </div>
  );
};

export default Home;
