import { gql } from "graphql-request";
import graphQLClient from "../GraphQLRequest";

type Data = {
  character: object;
};

export const characterLoader = async (request: { params: { id: string } }) => {
  const params = {
    id: request.params.id,
  };

  const data: Data = await graphQLClient.request(query, params);

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
        name
      }
    }
  }
`;
