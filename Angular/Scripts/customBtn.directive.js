var myapp = angular.module('myapp')
myapp.directive('myBtn', [function () {// directive name is camelCase 

    return {
        restrict: 'EA',//EA  -  E-element, A- attribute,  EA -element/attribute
        template: '<div><button>this is mybtn</button> </div>'

    };
}]);

myapp.directive('myCustomTag', [function () {// directive name is camelCase 

    return {
        restrict: 'EA',//EA  -  E-element, A- attribute,  EA -element/attribute
        templateUrl: 'customTpl.html',
        scope: {
            myTitle: '@',// '=' -> two way binding (property) ,'@' -> one way binding (pass value),'&' -> function
            myVal:'=',
        },//values :true ,false ,{}
        link: function (scope, element, attrs) {
            scope.myname = 'shiva from custom template';
        }
        ,
        controller: [function () {
            this.titlefromCustomDir = 'angular app';
        }],
        controllerAs: 'vm',
        bindToController: true
    };
}]);