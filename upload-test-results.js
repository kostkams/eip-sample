'use strict'

const results = require('./test-results.json')
const fetch = require('node-fetch')

fetch(process.argv[2] ,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Hub-Signature': process.argv[4]
  },
  body: JSON.stringify({
    issueId: process.argv[3],
    tests: results,
  })
})
  .then(value => console.log(value))
