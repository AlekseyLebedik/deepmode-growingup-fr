import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ENDPOINTS } from "../../shared/api/endpoints";

export const client = new ApolloClient({
  link: new HttpLink({ uri: ENDPOINTS.base }),
  cache: new InMemoryCache(),
});
