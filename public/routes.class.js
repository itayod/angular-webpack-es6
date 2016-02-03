export default class AppController{
    constructor($router){
        $router.config([
          { path: '/', component: 'webpack' }
      ])
    }
}

AppController.$inject=['$router']