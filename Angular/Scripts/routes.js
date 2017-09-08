angular.module('myapp')
    .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
        //$stateProvider given by ui router  to define state of routing

        $stateProvider.state({
            name: 'home',
            url: '/home',
            template: '<div> this is home page</div>'
        });
        $stateProvider.state({
            name: 'about',
            url: '/about',
            template: '<div> this is About page</div>'
        });

        $urlRouterProvider.otherwise('home');
    }]);