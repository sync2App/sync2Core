const consola = require('consola');
const logger = consola.withScope('[〄sync2]');
const express = require('express');
var api = express();
//Debug Mode?
global.debug = require("./isDebug.js");

if(global.debug == true){
    logger.info('Debug mode enabled');
    logger.info('Turn it off by changing the isDebug.js');
}


api.get('/', (req, res) => res.json({status: 0}))

if(api.listen(3000) !== false){
    logger.success('API started!');
}else{
    logger.error('API error...');
}