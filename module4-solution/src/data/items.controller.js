(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

// 'item' is injected through state's resolve
ItemsController.$inject = ['MenuDataService', 'items']
function ItemsController(MenuDataService, items) {
  var itemsCtrl = this;
  itemsCtrl.items = items;
}

})();
