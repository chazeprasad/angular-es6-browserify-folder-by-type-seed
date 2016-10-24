let routes = [];
let route;

route                       = {};
route.state                 = 'dashboard';
route.url                   = '/dashboard';
route.controller            = 'DashboardController as dashboard';
route.templateUrl           = '_dashboard.html';

routes.push(route);



export default routes

