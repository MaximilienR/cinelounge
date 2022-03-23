const Fixtures = require("node-mongodb-fixtures");
const path = require("path");
module.exports = async () => {
  const fixtures = new Fixtures({ dir: path.resolve(__dirname, "./entities") });

  await fixtures.connect(process.env.FIXTURES).then(() => fixtures.load());

  const product = await Promise.resolve(
    fixtures._db.collection("product")
  ).then((collection) => {
    return collection.find().toArray();
  });
  const cleanup = () => fixtures.unload().then(() => fixtures.disconnect());
  return { cleanup, entities: product };
};
