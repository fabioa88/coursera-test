(function(){
  'use strict';

  angular.module('Data')
    .controller('MainCategoriesListController', MainCategoriesListController);

    MainCategoriesListController.$inject = ['MenuDataService', 'items'];
    function MainCategoriesListController(MenuDataService, items){
      var categoriesList = this;
      categoriesList.items = items;

    }

})();
