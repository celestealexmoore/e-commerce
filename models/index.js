// import models
const product = require('./Product');
const category = require('./Category');
const tags = require('./Tags');
const productTag = require('./ProductTag');

// Products belongsTo Category
product.belongsTo(category, {
  foreignKey: 'category_id',
});

// Categories have many Products
category.hasMany(product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
product.belongsToMany(tags, {
  through: productTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)
tags.belongsToMany(product, {
  through: productTag,
  foreignKey: 'tag_id',
});

module.exports = {
  product,
  category,
  tags,
  productTag,
};
