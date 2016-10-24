import angular from 'angular';

import 'angular-animate';
import 'angular-cookies';

const require = [
    'ngCookies',
    'ngAnimate'

];

const coreModule = angular.module('app.core', require);


export default coreModule;
