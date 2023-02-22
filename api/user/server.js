require("dotenv").config();
const path = require("path");
const app = require("./app");
const port = process.env.APP_PORT || 5000;
app.listen(port, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", port);
});
