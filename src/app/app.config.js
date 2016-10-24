const bulk = require('bulk-require');
const routesMap = bulk(__dirname + '/route', ['./**/*.route.js']);

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider, $httpProvider) {
    'ngInject';

    if (process.env.NODE_ENV === 'production') {
        $compileProvider.debugInfoEnabled(false);
    }

    $locationProvider.html5Mode({
        enabled    : false,
        requireBase: false
    });

    Object.keys(routesMap).forEach((key) => {
        let item = routesMap[key];
        var routeList = item.default;
        for(var route of routeList){
            let stateName = route.state;
            // console.log(route)
            // delete  route.state;
            var stateConfig = route;
            $stateProvider.state(stateName, stateConfig);
        }
    });

    $urlRouterProvider.otherwise('/home');

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.common['Accept'] = 'application/json';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';


}

export default OnConfig;
