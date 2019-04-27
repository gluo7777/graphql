// imports
const express = require('express');
const graphqlHTTP = require('express-graphql')
const { schema } = require('./schemas/using-js-objects')

// configure express
const app = express();
// define request handler
app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true
}));

// start server
const PORT = 4000;
app.listen(PORT, () => console.info(`Server running on port ${PORT}.`));



