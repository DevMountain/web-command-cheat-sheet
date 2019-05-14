# Node Commands and Patterns

## Setting Up a Basic Server

An example can be found in `./sampleIndex.js`

- Create your server folder
  - `mkdir server`
- Create your server file and gitignore
  - `touch server/index.js .gitignore`
- Initialize as an NPM App
  - `npm init -y`
- Add node_modules/ to .gitignore
  - `echo node_modules > .gitignore`
- Install Express
  `npm i express`
- Require Express
  - `const express = require('express');`
- Declare App
  - `const app = express();`
- Declare Port
  - `const port = 3001;`
- Declare Test Endpoint
  - `app.get('/api/test', (req, res) => {res.status(200).send('Success')})`
  - Endpoints have 3 parts
    - HTTP CRUD method
    - Path
    - Handler Function
- Declare Listen Statement
  - `app.listen(port, () => console.log('Listening on port: ', port))`
- Test For Response in Browser
