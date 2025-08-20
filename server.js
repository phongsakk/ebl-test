const app = require("./app");

app.listen(8080, () => {
  console.log((new Date()).toISOString() + " app start on port 8080");
});
