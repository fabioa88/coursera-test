(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

    function FoundItemsDirective() {
      var ddo = {
        templateUrl: 'foundItems.html',
        scope: {
          //items: '<myList',
          found: '<',
          onRemove: '&'
        },
        controller: FoundItemsDirectiveController,
        controllerAs: 'list',
        bindToController: true
      };

      return ddo;
    }

    function FoundItemsDirectiveController() {
      var list = this;

      list.resultFound = function () {

        if (list.found.length <= 0)
        {
          return true;
        }

        return false;
      };

    }

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.found = "";

  list.getItems = function()
  {
    var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm)

    promise.then(function (response) {
      list.found = response;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  list.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    MenuSearchService.removeItem(itemIndex);
  };



}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
var foundItems = [];

  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      method: 'GET',
      url: (ApiBasePath + "/menu_items.json")
      }).then(function(result) {
        foundItems = [];
        for (var i=0; i < result.data.menu_items.length; i++)
        {

            if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) > 0)
            {
              foundItems.push(result.data.menu_items[i]);
            }
        }

        return foundItems;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };
}





})();
