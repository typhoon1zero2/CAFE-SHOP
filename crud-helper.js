//Connect to database
require('dotenv').config();
require('./config/database');


// Require the Mongoose models
const User = require('./models/User');
const Item = require('./models/Items');
const Category = require('./models/Category');
const Order = require('./models/Order');

let user, item, category, order;
let users, items, categories, orders;