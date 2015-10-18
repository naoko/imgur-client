var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '5b3f30f88ca5e8c';

module.exports = {
  get: function (url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function (response) {
        return response.json();
    })
  }
};

/*
example:
Api.get('images');
*/