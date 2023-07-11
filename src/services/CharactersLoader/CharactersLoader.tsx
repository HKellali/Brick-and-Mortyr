import { gql } from "graphql-request";
import graphQLClient from "../GraphQLRequest/GraphQLRequest";
import { LoaderFunction } from "react-router-dom";
import { CharacterCardData } from "./CharacterCardData";

type Data = {
  characters: CharacterCardData[];
};

export const charactersLoader: LoaderFunction = async ({ request }) => {
  const queryParameters = new URLSearchParams(new URL(request.url).search);
  const variables = {
    name: queryParameters.get("name"),
    page: parseInt(queryParameters.get("page")!, 10),
  };

  const data: Data = await graphQLClient.request(query, variables);

  return data.characters;
};

const query = gql`
  query characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;
