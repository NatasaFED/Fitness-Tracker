(function () {


    var myApp = angular.module("myModule", ["ngRoute"])

        .config(function ($routeProvider) {
            $routeProvider

                .when("/home", {
                    templateUrl: "template/home.html",
                    controller: "homeCtrl"
                })

                .when("/monday", {
                    templateUrl: "template/monday.html",
                    controller: "basicCtrl"
                })

                .when("/tuesday", {
                    templateUrl: "template/tuesday.html",
                    controller: "basicCtrl"
                })

                .when("/wednesday", {
                    templateUrl: "template/wednesday.html",
                    controller: "basicCtrl"
                })

                .when("/thursday", {
                    templateUrl: "template/thursday.html",
                    controller: "basicCtrl"
                })

                .when("/friday", {
                    templateUrl: "template/friday.html",
                    controller: "basicCtrl"
                })

                .otherwise({
                    redirectTo: "/home"
                })

        });



    var basicCtrl = myApp.controller("basicCtrl", basicCtrl);


    function basicCtrl($scope, $http) {


        $scope.dataLS = JSON.parse(localStorage.getItem("items"));


        console.log($scope.dataLS);

        console.log($scope.dataLS.length);







/*

        $scope.mondaySteps = $scope.podaciLS[0];
        $scope.tuesdaySteps = $scope.podaciLS[1];
        $scope.wednesdaySteps = $scope.podaciLS[2];
        $scope.thursdaySteps = $scope.podaciLS[3];
        $scope.fridaySteps = $scope.podaciLS[4];

*/
        var arrayKilometers = [];
        var arrayCalories = [];
        var arrayTime = [];
        var calories;


        for(var i = 0; i < $scope.dataLS.length; i++){

            arrayKilometers.push(($scope.dataLS[i] * 0.762 ) / 1000);

            console.log( i + " km => " + arrayKilometers[i]);


        }


        console.log("**************");

        for(var i = 0; i < $scope.dataLS.length; i++){

            arrayCalories.push($scope.dataLS[i] * 0.05);

            console.log( i + " cal => " + arrayCalories[i]);
        }


        console.log("**************");

        for(var i = 0; i < $scope.dataLS.length; i++){

            arrayTime.push(($scope.dataLS[i] * 0.5) / 3600 );

            console.log( i + " t => " + arrayTime[i]);
        }




        $scope.arrayKilometers = arrayKilometers;
        $scope.arrayCalories = arrayCalories;
        $scope.arrayTime = arrayTime;

        

        localStorage.setItem('kal', JSON.stringify(arrayCalories));

        calories = JSON.parse(localStorage.getItem('kal'));

        console.log(calories);





    }

}());


