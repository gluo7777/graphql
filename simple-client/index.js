// more on client set up here: https://graphql.org/graphql-js/graphql-clients/

const fetch = require('node-fetch');

fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        query: `{
            greeting
            owner{
              name
              email
              age
              websites
            }
          }`
    })
})
    .then(r => r.json())
    .then(data => console.log('data returned:', data));