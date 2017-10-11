const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=9936%20Silver%20Maple%20Rd%20Highlands%20Ranch',
  json: true
}, (error, response) => {
  // response.body.results[0].formatted_address destructuring
  // response.body.results[0].geometry.location.lat destructuring
  const {body: {results: [ {formatted_address, geometry: {location: {lat, lng}}} ]}} = response;
  // const {body: {results: [ {geometry: {location: {lat, lng}}} ]}};
  console.log(`Formatted Address: ${formatted_address}`);
  console.log(`Latitude: ${lat}, Longitude: ${lng}`);
});
