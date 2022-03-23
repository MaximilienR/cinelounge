// const mocker = require("fakingoose");
const { factory } = require("fakingoose");
const categorySchema = require("../../models/categoryModel");
const subCategorySchema = require("../../models/subCategoryModel");
const ProductSchema = require("../../models/productModel");

const subCategoryFactory = factory(subCategorySchema);
const categoryFactory = factory(categorySchema, {
  subCategories: {
    populateWithFactory: subCategoryFactory,
  },
});

const productFactory = factory(ProductSchema, {
  categoryId: {
    populateWithFactory: categoryFactory,
  },
  subCategoryId: {
    populateWithFactory: subCategoryFactory,
  },
});
module.exports = [
  subCategoryFactory.generate(),
  categoryFactory.generate(),
  productFactory.generate(),
];
