const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

const port = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

const app = express();
server.applyMiddleware({ app });

app.use("/", (req, res) => {
  res.json({
    fname: "Kehinde",
    lname: "Lawal",
  });
  console.log(req.ip);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
