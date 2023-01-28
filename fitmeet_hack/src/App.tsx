import React from "react";
import "./styles/styles.scss";
import "./styles/index.css";
import IndexPage from ".";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  HttpLink,
} from "@apollo/client";

const link = new HttpLink({ uri: "http://localhost:8000/graphql" });

const App: React.FC = () => {
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <IndexPage />
    </ApolloProvider>
  );
};

export default App;
