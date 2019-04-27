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
            william: owner(id: 1) {
              id
              name
              email
              age
              websites
            }
            david: owner(id: 2) {
              id
              name
              email
              age
              websites
              error
            }
            cars(year: 1999){
              make
              model
              year
              fullName
            }
          }
          `
    })
})
    .then(r => r.json())
    .then(data => console.log('data returned:', data));