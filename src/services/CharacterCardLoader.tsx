export type CharacterCardData = {
  name: string;
  id: string;
  image: string;
};

export const characterCardLoader = async ({ request }) => {
  const url = new URL(request.url);
  const name = getParam(url, "name");
  const page = getParam(url, "page", "1");
  const suffix = "?" + page + "&" + name;
  const prefix = "https://rickandmortyapi.com/api/character/";
  const adress = prefix + suffix;
  const response = await fetch(adress);
  const users = await response.json();
  return users;
};

function getParam(url: URL, paramName: string, defaultValue = "") {
  const param = url.searchParams.get(paramName)
    ? paramName + "=" + url.searchParams.get(paramName)
    : paramName + "=" + defaultValue;

  return param;
}
