import ApolloClient, { Operation } from "apollo-boost";

const client = new ApolloClient({
  clientState: {
    defaults: {
      auth: {
        _typename: "AUTH",
      },
    },
  },
  request: async (operation: Operation) => {
    operation.setContext({
      headers: { "X-JWT": localStorage.getItem("jwt") || "" },
    });
  },
  uri: "http://localhost:5000/graphql",
});

export default client;
