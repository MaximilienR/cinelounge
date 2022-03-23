const subCategory = require("../models/subCategoryModel");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getSubCategory = function (req, res) {
  subCategory
    .find()
    .then((subCategory) =>
      res.status(200).json({
        subCategory,
      })
    )
    .catch((error) => {
      res.status(500).json({
        message:
          "Une erreur est survenue lors de la récupération des sous-catégories, si le problème persite veuillez contacter l'administrateur du site",
      });
    });
};

// ------------------------- POST METHODS ------------------------------------

module.exports.addSubCategory = async (req, res) => {
  const newSubCategory = new subCategory({
    name: req.body.name,
    image: req.body.image,
  });

  try {
    const product = await newSubCategory.save();
    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).send(err);
  }
};
