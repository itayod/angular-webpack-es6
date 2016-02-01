import 'angular';

import webpack from 'components/webpack/webpack.js';

var app = angular.module('app',[webpack.name])

angular.element(document).ready(function() {
      angular.bootstrap(document, ['webpack']);
});
