export default (req, res) => {
  res.json({ ipaddress: req.headers["x-forwarded-for"].split(",")[0] });
}
