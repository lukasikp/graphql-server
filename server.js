const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");
const express = require("express");

const port = 9000;

const typeDefs = gql`
  type Query {
    greeting: String
  }
`;
const resolvers = {
  Query: {
    greeting: () => "Hello World"
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
const path = "/graphql";

server.applyMiddleware({ app, path });

app.listen(port, () => console.log(`server is running on port ${port}`));
