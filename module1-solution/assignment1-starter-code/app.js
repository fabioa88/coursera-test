(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {


      $scope.checkIfTooMuch = function () {
        var numItems = calculateNumMenuItems($scope.lunch_menu);

        switch(true) {
          case (numItems >= 1 && numItems < 4):
              $scope.message = "Enjoy!";
              $scope.cssClassBorderColorGreen = "1";
              $scope.cssClassBorderColorRed = "";
              $scope.cssClassMessageRed = "";
              $scope.cssClassMessageGreen = "1";
              break;
          case numItems > 3:
              $scope.message = "Too much!";
              $scope.cssClassBorderColorGreen = "1";
              $scope.cssClassBorderColorRed = "";
              $scope.cssClassMessageRed = "";
              $scope.cssClassMessageGreen = "1";
              break;
          default:
              $scope.message = "Please enter data first";
              $scope.cssClassBorderColorGreen = "";
              $scope.cssClassBorderColorRed = "1";
              $scope.cssClassMessageGreen = "";
              $scope.cssClassMessageRed = "1";
      }
      };

      function calculateNumMenuItems(lunch_menu) {
        if (!!lunch_menu)
        {
          var array = lunch_menu.split(',');
          var numItems = 0;
          for (var i = 0; i < array.length; i++)
          {
            if (!!array[i].trim())
              numItems += 1;
          }

          return numItems;
        }
        else return 0;
      };



    };

})();
