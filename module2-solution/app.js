(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
      var toBuyList = this;

      toBuyList.itemName = "";
      toBuyList.itemQuantity = "";

      toBuyList.addItemToBoughtList = function (itemIdex) {
        ShoppingListCheckOffService.addItemToBoughtList(itemIdex);
      }

      toBuyList.items = ShoppingListCheckOffService.getItemToBuyList();

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
      var alreadyBoughtList = this;

      alreadyBoughtList.items = ShoppingListCheckOffService.getItemAlreadyBoughtList();

    }


    function ShoppingListCheckOffService() {
      var service = this;

      var toBuyitems = [
        { name: "cookies", quantity: 10 },
        { name: "books", quantity: 5 },
        { name: "smartphone", quantity: 2 },
        { name: "cd", quantity: 12 },
        { name: "printers", quantity: 3 }
      ];

      var boughtitems = [];

      service.addItemToBoughtList = function (itemIdex) {
        var item = toBuyitems[itemIdex];
        toBuyitems.splice(itemIdex, 1);
        boughtitems.push(item);
      };

      service.getItemToBuyList = function () {
        return toBuyitems;
      };

      service.getItemAlreadyBoughtList = function () {
        return boughtitems;
      };

    }


})();
