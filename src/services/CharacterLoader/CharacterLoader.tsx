import { gql } from "graphql-request";
import graphQLClient from "../GraphQLRequest/GraphQLRequest";
import { LoaderFunction } from "react-router-dom";

type Data = {
  character: object;
};

export const characterLoader: LoaderFunction = async ({ params }) => {
  const variables = {
    id: params.id,
  };

  const data: Data = await graphQLClient.request(query, variables);

  return data.character;
};

const query = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      species
      location {
        name
      }
      origin {
        name
      }
      episode {
        id
        name
      }
    }
  }
`;
