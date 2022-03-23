const Fixtures = require("node-mongodb-fixtures");
const path = require("path");
// const uri = "mongodb+srv://Kashyk:Lounge123/fixtures";
// const options = null;

const fixtures = new Fixtures({ dir: path.resolve(__dirname, "./entities") });

fixtures
  .connect(
    "mongodb+srv://Kashyk:Lounge123@cinelounge.mjim9.mongodb.net/fixtures"
  )
  .then(() => fixtures.unload())
  .then(() => fixtures.load())
  .catch((e) => console.error(e))
  .finally(() => fixtures.disconnect());
