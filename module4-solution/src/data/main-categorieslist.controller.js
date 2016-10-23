(function(){
  'use strict';

  angular.module('Data')
    .controller('MainCategoriesListController', MainCategoriesListController);

    MainCategoriesListController.$inject = ['items'];
    function MainCategoriesListController(items){
      var categoriesList = this;
      categoriesList.items = items;

    }

})();
