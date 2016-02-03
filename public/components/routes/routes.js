//import ngnRoute from  "angular-new-router";
//temporary for now...
import ngnRoute from "angular-new-router-es5.0.3.0.js";
import RouteController from 'components/routes/routes.class.js'

export default angular.module('app.routes',[ngnRoute.name])
            .controller('RouteController',RouteController)