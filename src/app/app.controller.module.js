import angular from 'angular';

const bulk = require('bulk-require');
const controllersModule = angular.module('app.controller', []);
const controllers = bulk(__dirname + '/controller', ['./**/*.controller.js']);

function declare(controllerMap) {
    Object.keys(controllerMap).forEach((key) => {
        let item = controllerMap[key];
        controllersModule.controller(getCotrollerName(key), item.default);
    });
}

declare(controllers);

export default controllersModule;

function getCotrollerName(ctr) {
    let part ;
    let name = '';
    var parts = ctr.split('.');
    for (let i =0; i<parts.length; i++) {
        part = parts[i];
        name += part.charAt(0).toUpperCase() + part.slice(1);
    }
    return name;
}



