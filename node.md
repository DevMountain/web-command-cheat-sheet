# Node Commands and Patterns

## Setting Up a Basic Server

- Create your server folder
  - `mkdir server`
- Create your server file
  - `touch server/index.js .gitignore`
- Initialize NPM App
  - `npm init -y`
- Add node_modules/ to .gitignore
  - `echo node_modules > .gitignore`
- Install Express
  `npm i express`
- Require Express
  - `const express = require('express)`
- Declare App
  - `const app = express()`
- Declare Listen Statement
  - `app.listen(port, () => console.log('Listening'))`
- Declare Test Endpoint
  - `app.get('/api/test', (req, res) => {res.status(200).send('Success')})`
  - Endpoints have 3 parts
    - HTTP CRUD method
    - Path
    - Handler Function
- Test For Response in Browser
