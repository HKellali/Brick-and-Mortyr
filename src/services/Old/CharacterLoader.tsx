import { LoaderFunction } from "react-router-dom";

export const characterLoader: LoaderFunction = async ({ params }) => {
  const id = params.id;
  const adress = "https://rickandmortyapi.com/api/character/" + id;
  const response = await fetch(adress);
  const user = await response.json();
  return user;
};
