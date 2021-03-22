export default (req, res) => {
  const date = new Date();
  const day = date.toLocaleString('en-us', {weekday: 'long'});
  res.status(200).send(day);
};
