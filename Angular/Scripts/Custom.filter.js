angular.module('myapp')
    .filter('username', [function () {
        return function (val,greeting) {

            if(val){
                return greeting +' '+ val.substr(0,3).toUpperCase();
            }
            return val;
        };
    }]);