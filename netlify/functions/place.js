const fetch = require('node-fetch');

export default async function (req, res) {
  let response = await fetch("http://ip-api.com/json/");
  let place = await response.json();
  res.json({ answer: "I'm in " + place.regionName + "!" });
}
