// API usage endpoint
app.get("/api/whoami", (req, res) => {
    res.json({ipaddress: req.headers["x-forwarded-for"].split(",")[0], language: req.headers["accept-language"], software: req.headers["user-agent"]});
    console.log(req.headers["x-forwarded-for"].split(",")[0]);
  });
  