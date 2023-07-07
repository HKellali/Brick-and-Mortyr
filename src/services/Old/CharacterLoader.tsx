export const characterLoader = async (request: { params: { id: string } }) => {
  const id = request.params.id;
  const adress = "https://rickandmortyapi.com/api/character/" + id;
  const response = await fetch(adress);
  const user = await response.json();
  return user;
};
