angular.module('myapp')
    .directive('mySlideShow', [function () {

        return {
            restrict: 'E',
            templateUrl: 'mySlideShow.tpl.html',
            scope: {
                slideshowTitle: '@',
                slideData: '=',
                onImgClick: '&'
            },
            controller: [function () {
                this.counter = 0;
                this.onNext = function () {
                    if (this.counter === this.slideData.length - 1) {
                        return this.counter = 0;
                    }
                    else {
                        return this.counter = this.counter + 1;
                    }
                };
                this.onPrev = function () {
                    if (this.counter === 0) {
                        this.counter = this.slideData.length - 1;
                    }
                    else {
                        return this.counter = this.counter - 1;
                    }
                }
            }],
            controllerAs: 'vm',
            bindToController: true

        }
    }]);