/**
 * Queries can be sent as an HTTP GET request:
 */
import { GraphQLClient } from "graphql-request";

const endpoint = "https://rickandmortyapi.com/graphql";

const graphQLClient = new GraphQLClient(endpoint);

export default graphQLClient;
