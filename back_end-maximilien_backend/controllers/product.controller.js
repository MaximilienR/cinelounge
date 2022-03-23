const Products = require("../models/productModel");
const { uploadErrors } = require("../utils/errors.utils");
const ObjectID = require("mongoose").Types.ObjectId;
const fs = require("fs");

function reqSort(setting) {
  if (setting === "namea")
    return {
      name: 1,
    };
  if (setting === "namez")
    return {
      name: -1,
    };
  if (setting === "price1")
    return {
      price: 1,
    };
  if (setting === "price9")
    return {
      price: -1,
    };
  return {
    _id: 1,
  };
}

module.exports.getProduct = function (req, res) {
  Products.find()
    .populate("categoryId")
    .populate("subCategoryId")
    .then((products) =>
      res.status(200).json({
        products,
      })
    )
    .catch((error) => {
      res.status(500).json({
        message:
          "Une erreur est survenue lors de la récupération des produits, si le problème persite veuillez contacter l'administrateur du site",
      });
    });
};

module.exports.getProductById = function (req, res) {
  Products.findById(req.params.id)
    .then((data) => {
      if (!data)
        res.status(404).send({
          message: "Not found products with name " + req.params.id,
        });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving products with name=" + req.params.id,
      });
    });
};

// module.exports.getSortedProduct = function (req, res) {
//   Products.find()
//     .sort(reqSort(req.params.sort))
//     .populate("categories")
//     .populate("subcategories")
//     .then((products) =>
//       res.status(200).json({
//         products,
//       })
//     )
//     .catch((error) => {
//       res.status(500).json({
//         message:
//           "Une erreur est survenue lors de la récupération des produits, si le problème persite veuillez contacter l'administrateur du site",
//       });
//     });
// };

function getParam(param) {
  switch (param) {
    case "films":
      return "61e97d69f212abcf0d8ea064";
    case "series":
      return "61e97e5ef212abcf0d8ea066";
    case "goodies":
      return "61e980f1f212abcf0d8ea068";
    case "films/action":
      return "61ea80d609bff4f9c1253bea";
    case "goodies/jeux":
      return "61ea84c5739b496b9c5db5bf";
    case "films/horreur":
      return "61ea8598739b496b9c5db5c5";
    case "series/fantastique":
      return "61ea8e9b739b496b9c5db5c7";
    case "films/animation":
      return "61ea912b739b496b9c5db5c9";
    case "films/comedie":
      return "61ea917c739b496b9c5db5cb";
    case "series/crime":
      return "61ea91a8739b496b9c5db5cd";
    case "goodies/epicerie":
      return "61ea91ef739b496b9c5db5cf";
    case "films/sciencefiction":
      return "61ea9217739b496b9c5db5d1";
    case "series/comedie":
      return "61ea924a739b496b9c5db5d3";
    case "films/documentaire":
      return "61ea9273739b496b9c5db5d5";
    case "series/sciencefiction":
      return "61ea929f739b496b9c5db5d7";
    case "goodies/vestimentaire":
      return "61ea92d3739b496b9c5db5d9";
    case "series/drame":
      return "61ea94f4739b496b9c5db5db";
    case "goodies/maison":
      return "61ea9561739b496b9c5db5dd";
    case "series/action":
      return "61ea957f739b496b9c5db5df";
    case "series/animation":
      return "61ea95a5739b496b9c5db5e1";
    case "series/horreur":
      return "61ea95c4739b496b9c5db5e3";
    case "series/documentaire":
      return "61ea9610739b496b9c5db5e7";
    case "films/fantastique":
      return "61ea9677739b496b9c5db5e9";
  }
}

module.exports.getSortedByCategories = function (req, res) {
  console.log(req.params);
  Products.find({ categories: { $in: getParam(req.params.categories) } })
    .populate("categoryId")
    .populate("subCategoryId")
    .then((products) =>
      res.status(200).json({
        products,
      })
    )
    .catch((error) => {
      res.status(500).json({
        message:
          "Une erreur est survenue lors de la récupération des produits, si le problème persite veuillez contacter l'administrateur du site",
      });
    });
};
module.exports.getSortedBySubCategories = function (req, res) {
  console.log(req.params);
  Products.find()
    .populate("categoryId")
    .populate("subCategoryId")
    .find({ "categoryId[0].name": req.params.categories });
  // .then((products) =>
  //   res.status(200).json({
  //     products,
  //   })
  // )
  // .catch((error) => {
  //   console.log(error);
  //   // res.status(500).json({
  //   //   message:
  //   //     "Une erreur est survenue lors de la récupération des produits, si le problème persite veuillez contacter l'administrateur du site",
  //   // });
  // });
};
// ------------------------- POST METHODS ------------------------------------

module.exports.addProduct = async (req, res) => {
  // if (req.file !== null) {
  let date = new Date(Date.now());
  const fileName = req.body.name + date.getHours() + date.getMinutes() + ".jpg";
  console.log(req.file);
  if (req.file) {
    console.log(req.file);
    try {
      if (
        req.file.mimetype != "image/jpg" &&
        req.file.mimetype != "image/png" &&
        req.file.mimetype != "image/jpeg"
      )
        throw Error("invalid file");

      if (req.file.size > 500000) throw Error("max size");
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }
  }

  // await pipeline(
  //   req.file.stream,
  //   fs.createWriteStream(
  //     `${__dirname}/../client/public/uploads/products/${fileName}`
  //   )
  // );

  const newProduct = new Products({
    selection: req.body.selection,
    description: req.body.description,
    categoryId: req.body.categoryId,
    subCategoryId: req.body.subCategoryId,
    online: req.body.online,
    image: req.file ? "/uploads/products/" + fileName : req.body.image,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    feature: req.body.feature,
    tags: req.body.tags,
  });

  try {
    const product = await newProduct.save();
    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).send(err);
  }
};
// };

module.exports.updateProduct = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);
  let date = new Date(Date.now());
  const fileName = req.body.name + date.getHours() + date.getMinutes() + ".jpg";
  console.log(req.body.image);
  if (req.file) {
    console.log(req.file);
    try {
      if (
        req.file.mimetype != "image/jpg" &&
        req.file.mimetype != "image/png" &&
        req.file.mimetype != "image/jpeg"
      )
        throw Error("invalid file");

      if (req.file.size > 500000) throw Error("max size");
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }
  }
  // try {
  //   console.log(req.file);
  //   if (
  //     req.file.mimetype != "image/jpg" &&
  //     req.file.mimetype != "image/png" &&
  //     req.file.mimetype != "image/jpeg"
  //   ) {
  //     throw Error("invalid file");
  //   }

  //   if (req.file.size > 500000) throw Error("max size");
  // } catch (err) {
  //   const errors = uploadErrors(err);
  //   return res.status(201).json({ errors });
  // }
  // const fileName = req.body.name + ".jpg";
  // await pipeline(req.file.stream, req.file.path);

  try {
    await Products.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          selection: req.body.selection,
          caracteristics: req.body.caracteristics,
          categories: req.body.categories,
          description: req.body.description,
          etat: req.body.etat,
          image: req.file ? "/uploads/products/" + fileName : "",
          licence: req.body.licence,
          name: req.body.name,
          price: req.body.price,
          stock: req.body.stock,
          feature: req.body.feature,
          subcategories: req.body.subcategories,
          tags: req.body.tags,
          timestamp: new Date().getTime(),
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },

      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(400).send(err);
      }
    ).clone();
  } catch (error) {
    console.log("Update Product Request Error : " + error);
  }
};
// ------------------------- UPDATE METHODS ------------------------------------

//update
// router.put("/:id", function (req, res) {
//   if (!req.body) {
//     return res.status(400).send({
//       message: "Data to update can not be empty!",
//     });
//   }

//   const id = req.params.id;

//   Products.findByIdAndUpdate(id, req.body, {
//     useFindAndModify: false,
//   })
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot update Products with id=${id}. Maybe Products was not found!`,
//         });
//       } else
//         res.send({
//           message: "Products was updated successfully.",
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send({
//         message: "Error updating Products with id=" + id,
//       });
//     });
// });

// // ------------------------- DELETE METHODS ------------------------------------
// //delete
module.exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  Products.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Products with id=${id}. Maybe Products was not found!`,
        });
      } else {
        fs.unlink(
          `${__dirname}/../../front_end/public/${data.image}`,
          () => {}
        );
        res.send({
          message: "Products was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Products with id=" + id,
      });
    })
    .catch((err) => res.status(500).json({ err }));
};

// exports.deleteProduct = (req, res, next) => {
//   Products.findOne({ id: req.params.id })
//     .then((Products) => {
//       const filename = Products.imageUrl.split("/image/")[1];
//       fs.unlink(`/uploads/products/${filename}`, () => {
//         Products.deleteOne({ id: req.params.id })
//           .then(() => res.status(200).json({ message: "Objet supprimé !" }))
//           .catch((error) => res.status(400).json({ error }));
//       });
//     })
//     .catch((error) => res.status(500).json({ error }));
// };

// module.exports = router;
