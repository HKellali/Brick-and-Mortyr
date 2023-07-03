export type CharacterCardData = {
  name: string;
  id: string;
  image: string;
};

export const characterCardLoader = async ({ request }) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  const prefix = "https://rickandmortyapi.com/api/character/";
  const adress = name ? prefix + "?name=" + name : prefix;
  const response = await fetch(adress);
  const users = await response.json();
  return users;
};
