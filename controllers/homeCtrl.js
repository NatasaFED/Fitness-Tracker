


(function () {


    angular.module("myModule")
        .controller("homeCtrl", homeCtrl);


    function homeCtrl($scope, $http) {

        $http({
            url: "https://api.myjson.com/bins/1gwnal",
            method: 'get'
        })
            .then(function (response) {

                $scope.getData = response.data;


                //  console.log($scope.getData );



                var arraySteps = [];
                var radnomArray = [];

                var lengthArraySteps;
                var monday;
                var mondaySteps;
                var tuesday;
                var tuesdaySteps;
                var wednesday;
                var wednesdaySteps;
                var thursday;
                var thursdaySteps;
                var friday;
                var fridaySteps;



                for (var i = 0; i < $scope.getData.length; i++) {

                    arraySteps.push($scope.getData[i].steps);

                }


                console.log(arraySteps);



                lengthArraySteps = arraySteps.length;


                monday = Math.floor(Math.random() * lengthArraySteps);

                console.log(monday);



                mondaySteps = arraySteps[monday];

                console.log(mondaySteps);




                tuesday = Math.floor(Math.random() * lengthArraySteps);

                tuesdaySteps = arraySteps[tuesday];



                wednesday = Math.floor(Math.random() * lengthArraySteps);

                wednesdaySteps = arraySteps[wednesday];



                thursday = Math.floor(Math.random() * lengthArraySteps);

                thursdaySteps = arraySteps[thursday];



                friday = Math.floor(Math.random() * lengthArraySteps);

                fridaySteps = arraySteps[friday];



                $scope.mondaySteps = mondaySteps;
                $scope.tuesdaySteps = tuesdaySteps;
                $scope.wednesdaySteps = wednesdaySteps;
                $scope.thursdaySteps = thursdaySteps;
                $scope.fridaySteps = fridaySteps;





                radnomArray.push(mondaySteps, tuesdaySteps, wednesdaySteps, thursdaySteps, fridaySteps);

                console.log(radnomArray);


                localStorage.setItem('items', JSON.stringify(radnomArray));

                var data = JSON.parse(localStorage.getItem('items'));

                console.log(data);



                var sumSteps = 0;

                for( var i = 0; i < radnomArray.length; i++){

                    sumSteps += radnomArray[i];
                }


                console.log(radnomArray);

                console.log(sumSteps);


                $scope.sumSteps = sumSteps;





                $scope.calLS = JSON.parse(localStorage.getItem("kal"));


                console.log($scope.calLS);

                console.log($scope.calLS.length);


                var sumCalories = 0;

                for(var i = 0; i < $scope.calLS.length; i++){

                    sumCalories += $scope.calLS[i];
                }


                console.log(sumCalories);


                $scope.sumCalories = sumCalories;

            })
    }





}());





