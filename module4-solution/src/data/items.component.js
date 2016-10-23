(function(){
  'use strict';

  angular.module('Data')
    .component('itemsList', {
      templateUrl: 'src/data/templates/items.template.html',
      bindings: {
        items: '<'
      }
    });

})();
