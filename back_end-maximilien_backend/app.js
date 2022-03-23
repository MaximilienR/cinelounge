const express = require("express");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

// const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");
// const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes");
const subCategoryRoutes = require("./routes/subCategory.routes");
const cors = require("cors");
// on crée un app avec express
const app = express();

// require("./routes/user.routes")(app);

// Code qui permet de récupéré les requetes depuis le front-end
app.use(express.json());

app.use(cors());

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // res.header(
  //   "Access-Control-Allow-Methods",
  //   "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  // );
  next();
});

// Routes où se trouve nos controleurs, de là où les requetes de chaque table sont crée
// const routesProduits = require("./routes/produits");
// const routesCategories = require("./routes/categories");
// const routesCategoriesSub = require("./routes/categoriesSub");
// RATE EST A MODIFIER
// const routesRates = require("./routes/rates");
// var indexRouter = require("./routes/index");
// const pathToClientBuild = path.join(__dirname, "../front_end/dist");
// app.use(express.static(pathToClientBuild));
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(pathToClientBuild, "index.html"));
// });
// URL
// app.use("/", indexRouter);

// En se rendant sur // http://localhost:5000/test/Alex
// Vous trouverez "Salut, Alex"
// app.get("/test/:name", function (req, res) {
//   // On utilise /:name dans l'url pour crée un req.params.name
//   res.send("Salut, " + req.params.name);
//   // On le récupère dans le res.send, qui sert à envoyer une reponse
// });
// App.use permet de definir un nouveau middleware pour de l'appel vers le back
// app.use("/rates", routesRates);
// app.use("/categories", routesCategories);
// app.use("/subCategories", routesCategoriesSub);

app.use("/api/products", productRoutes);

app.use("/api/category", categoryRoutes);
app.use("/api/subCategory", subCategoryRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/test", userRoutes);

// Envoie un message de l'heure sur l'ordinateur
// Comme il y a besoin de test récurant cela fait en sorte d'être certain que le back à été modifié
app.listen(process.env.PORT, () => {
  console.log(
    `App listening on port ${process.env.PORT} at : ` +
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds()
  );
});
