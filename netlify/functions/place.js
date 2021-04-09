const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  let response = await fetch("http://ip-api.com/json/");
  let place = await response.json();
  context.json({ answer: "I'm in " + place.regionName + "!" });
}
