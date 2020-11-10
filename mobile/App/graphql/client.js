import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  //If android, put your ip address and not localhost
  uri: `http://localhost:4000`,
});
