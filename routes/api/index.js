const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');


//already prepended with /api

// /api/categories
router.use('/categories', categoryRoutes);

// /api/products
router.use('/products', productRoutes);

// /api/tags
router.use('/tags', tagRoutes);

module.exports = router;
