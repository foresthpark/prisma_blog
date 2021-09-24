import { ApolloServer, gql } from "apollo-server";

const typeDef = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "wat",
  },
};

const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers: resolvers,
});

server.listen().then(() => console.log("Server is running"));
