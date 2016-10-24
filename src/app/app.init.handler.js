function appInitHandler($rootScope, AppSettings, $cookies, $base64, $http, $state) {
    'ngInject';

    // change page title based on state
    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
        $rootScope.pageTitle = '';

        if (toState.title) {
            $rootScope.pageTitle += toState.title;
            $rootScope.pageTitle += ' \u2014 ';
        }

        $rootScope.pageTitle += AppSettings.appTitle;
    });



    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {


    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.busy = false;
    })


}

export default appInitHandler;


