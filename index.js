const server = require("json-server");
const graphql = require("json-graphql-server").default;
const data = require("./db.js");

const app = server.create();
const router = server.router(data);
const middlewares = server.defaults();
const port = process.env.PORT || 5000;

app.use(middlewares);
app.use("/graphql", graphql(data));
app.use(router);
app.listen(port);
