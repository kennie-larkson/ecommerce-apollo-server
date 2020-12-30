const { gql } = require("apollo-server-express");
const { isConstructorDeclaration } = require("typescript");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

module.exports = typeDefs;
