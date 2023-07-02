import "./Home.scss";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const adress = "https://rickandmortyapi.com/api/character";
  const fetchUserData = () => {
    fetch(adress)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.results);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="home">
      {users.length > 0 && (
        <div className="wrapper">
          {users.map((user) => (
            <CharacterCard
              image={user.image}
              name={user.name}
              id={user.id}
            ></CharacterCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
