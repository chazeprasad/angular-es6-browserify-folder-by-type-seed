import angular from 'angular';

const bulk = require('bulk-require');
const servicesModule = angular.module('app.service', []);
const services = bulk(__dirname + '/service', ['./**/*.service.js']);

function declare(controllerMap) {
    Object.keys(controllerMap).forEach((key) => {
        let item = controllerMap[key];
        servicesModule.service(getServiceName(key), item.default);
    });
}


declare(services);

export default servicesModule;


function getServiceName(ctr) {
    let part ;
    let name = '';
    var parts = ctr.split('.');
    for (let i =0; i<parts.length; i++) {
        part = parts[i];
        name += part.charAt(0).toUpperCase() + part.slice(1);
    }
    return name.charAt(0).toLowerCase() + name.slice(1);
}
