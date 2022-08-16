import {
  ApolloClient,
  InMemoryCache
} from "@apollo/client";

const cache = new InMemoryCache();
const uri = `${process.env.REACT_APP_BACKEND_URL}/graphql`

const client = new ApolloClient({
  cache,
  uri
});

export default client;
