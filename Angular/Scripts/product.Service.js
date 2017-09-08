angular.module('myapp').service('ProductService', ['$http', '$q', function ($http, $q) {

    var originalProducts = [
        {
            name: 'micromax',
            price: 20000
        },
        {
            name: 'Nokia',
            price: 5000
        }];

    this.getProducts = function () {
        return [].concat(originalProducts);
    }

    this.getGitHubUsers = function () {
        var deferred = $q.defer();
        var httpPromise = $http.get('https://api.github.com/users/1');
        httpPromise.then(function (res) {
            deferred.resolve(res.data)
        });


        // handle multiple ajax request and 
        //return result when all request are completed
        // var httpPromise1 = $http.get('https://api.github.com/users/5');
        // $q.all([httpPromise, httpPromise1]).then(function (res) {
        //     var result = res.map(function (item) {
        //         return item.data;
        //     });
        //     deferred.resolve(result);
        // });
        return deferred.promise;

    }
}])