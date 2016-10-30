(function() {
  "use strict";

  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService'];

  function SignupController(MenuService){
    var reg = this;

    reg.submit = function(){
      MenuService.getMenuItem(reg.user.favouritedish)
        .then(function(response) {
          reg.user.responseDish = response;
          MenuService.savePreferences(reg.user);
          reg.completed = true;
          reg.error = false;
        })
        .catch(function(){
          reg.error = true;
          reg.completed = false;
        });

    }

  }

})();
