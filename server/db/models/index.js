const User = require('./user');
const Product = require('./product');
const Category = require('./category');
const Order = require('./Order');
const Product_Order = require('./product_order');
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
//CG: Underscore between table names would be more appropriate
Category.belongsToMany(Product, {through: 'product_category'});
Product.belongsToMany(Category, {through: 'product_category'});
Order.belongsTo(User); //will set a userId onto Order table.
User.hasMany(Order);
Order.belongsToMany(Product, {through: 'product_order'});
Product.belongsToMany(Order, {through: 'product_order'});

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Category,
  Order,
  Product_Order
}
