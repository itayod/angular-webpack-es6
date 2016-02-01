'use strict';
export default 

angular.module('webpack',[])
    .component('webpack',{
        template: require('components/webpack/webpack.html'),
        controller:webpackController,
        controllerAs: 'webpack'
    })


function webpackController(){
    this.webpack = 'webpack'
}


webpackController.$inject=['$scope'];