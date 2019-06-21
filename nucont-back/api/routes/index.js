'use-strict';

module.exports = (app) => {
  const nucontRoutes = require("./nucontRoutes");
  app.use('/', nucontRoutes);
};