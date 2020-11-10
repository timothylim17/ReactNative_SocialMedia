import ApolloClient from "apollo-boost";
import { LOCALHOST } from "@env";

export const client = new ApolloClient({
  uri: `http://${LOCALHOST}:4000`,
});
