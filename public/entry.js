import 'angular';

//import ngnRoute from  "angular-new-router";
//temporary for now...
import ngnRoute from "angular-new-router-es5.0.3.0.js";
import webpack from 'components/webpack/webpack.js';

import RouteController from "routes.class.js";
var app = angular.module('app',[ngnRoute.name,webpack.name])
app.controller('MainController',RouteController)

//kick angular
angular.element(document).ready(function() {
      angular.bootstrap(document, ['app']);
});
