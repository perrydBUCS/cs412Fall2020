const fetch = require('node-fetch');

fetch('http://kidpub.com')
    .then(response => response.text()) //implicit return
    .then(text => console.log(`${text}`))
    .catch(err => console.log(err));
