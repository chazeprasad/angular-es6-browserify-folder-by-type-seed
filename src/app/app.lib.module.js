import angular from 'angular';

import 'angular-ui-router';
import 'angular-base64';
import 'angular-moment';
import 'ngstorage';
import 'angular-utils-pagination';


const require = [

    'ui.router',
    'base64',
    'angularMoment',
    'ngStorage',
    'angularUtils.directives.dirPagination'

];

const libModule = angular.module('app.lib', require);


export default libModule;
