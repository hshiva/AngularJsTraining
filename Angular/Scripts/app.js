var myApp = angular.module('myapp', ['ui.router']);

myApp.controller('MyCtrl', ['$scope', 'ProductService', function ($scope, ProductService) {

    $scope.title = "welcome shiva";
    $scope.onBtnClick = function () {
        alert('clicked button')
    }

    $scope.onSearch = function () {
        $scope.products = ProductService.getProducts().filter(function (item) {
            return item.name.toLowerCase().indexOf($scope.query.toLowerCase()) > -1;
        });

    };
    $scope.products = ProductService.getProducts();

    var promise = ProductService.getGitHubUsers();

    promise.then(function (res) {
        console.log(res);
    }, function () {
        console.log('erro occured')
    })

    // for custom slide show directive
    $scope.catData = {
        name: 'Cats',
        list: ['http://thecatapi.com/api/images/get?format=src&type=gif',
            'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg'
            , 'http://s7d2.scene7.com/is/image/PetSmart/ARTHMB-HowToHelpYourCatHaveFewerHairballs-20160818?$AR1104$'
        ]
    };

    $scope.dogData = {
        name: 'Dogs',
        list: [
            'https://www.what-dog.net/Images/faces2/scroll0015.jpg',
            'https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/DA746CFE-B4A4-43C0-A02F8BAF7BC6CE20/thul-51a71b71-3799-5e48-8a84-5b08c9efa9cf.jpg?response-content-disposition=inline',
            'https://s-media-cache-ak0.pinimg.com/736x/63/0f/0e/630f0ef3f6f3126ca11f19f4a9b85243--dachshund-puppies-weenie-dogs.jpg',
            'http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-30.jpg'
        ]
    };

    $scope.onCatClicked = function () {
        return alert('cat clicked');
    };
    $scope.onDogClicked = function () {
        return alert('dog clicked');
    };
    //----------------------

}]);