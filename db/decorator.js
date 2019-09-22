const Product = require('.models/Product');
module.exports = function(req, res, next) {
  req.db = {
    Product: Product
  };
  next();
};
