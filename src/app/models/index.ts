'use strict';

import * as fs from 'fs';
import * as path from 'path';
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var config = require('../../config/database');

var db: any = {};

var sequelize = new Sequelize(config.database, config.username, config.password, config);

console.log(`Sequelize config: ${JSON.stringify(config)}`);

fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file: string) => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
