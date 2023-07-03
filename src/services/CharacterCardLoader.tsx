export type CharacterCardData = {
  name: string;
  id: string;
  image: string;
};

export const characterCardLoader = async () => {
  const adress = "https://rickandmortyapi.com/api/character";
  const response = await fetch(adress);
  const users = await response.json();
  return users;
};
