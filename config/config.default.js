/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  //config for sql
  config.sequelize = {
    dialect: 'mysql',
    database: 'wzw-egg',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root'
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1596167313830_8906';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
