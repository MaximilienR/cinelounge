const Category = require("../models/categoryModel");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getCategory = function (req, res) {
  Category.find()
    .populate("subCategories")
    .then((category) =>
      res.status(200).json({
        category,
      })
    )
    .catch((error) => {
      res.status(500).json({
        message:
          "Une erreur est survenue lors de la récupération des catégories, si le problème persite veuillez contacter l'administrateur du site",
      });
    });
};

// ------------------------- POST METHODS ------------------------------------

module.exports.addCategory = async (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
    subCategories: req.body.subCategories,
  });

  try {
    const product = await newCategory.save();
    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).send(err);
  }
};
