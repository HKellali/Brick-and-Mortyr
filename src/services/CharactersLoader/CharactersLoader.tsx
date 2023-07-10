import { gql } from "graphql-request";
import graphQLClient from "../GraphQLRequest/GraphQLRequest";
import { useLocation } from "react-router-dom";

type Data = {
  characters: object[];
};

export const charactersLoader = async (request: {
  request: { url: string };
}) => {
  const queryParameters = new URLSearchParams(useLocation().search);
  const params = {
    name: queryParameters.get("name"),
    page: parseInt(queryParameters.get("page")!),
  };

  const data: Data = await graphQLClient.request(query, params);

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
