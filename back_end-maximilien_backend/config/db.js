const mongoose = require("mongoose");
const db = require("../models");
const Role = db.role;

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "customer",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USERPASS +
      "@cinelounge.mjim9.mongodb.net/CineloungeV2"
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => console.log("Echec de connexion", err));
