export const charactersLoader = async (request: {
  request: { url: string };
}) => {
  const url = new URL(request.request.url);
  const params = {
    name: getParam(url, "name"),
    page: getParam(url, "page", "1"),
  };
  const suffix = "?" + params.page + "&" + params.name;
  const prefix = "https://rickandmortyapi.com/api/character/";
  const adress = prefix + suffix;
  const response = await fetch(adress);
  const users = await response.json();
  return users;
};

const getParam = (url: URL, paramName: string, defaultValue = "") => {
  const param = url.searchParams.get(paramName)
    ? paramName + "=" + url.searchParams.get(paramName)
    : paramName + "=" + defaultValue;

  return param;
};
