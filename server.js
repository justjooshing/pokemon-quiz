const app = require("./src/app");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}...`);
});
