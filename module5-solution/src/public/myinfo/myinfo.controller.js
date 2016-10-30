(function(){
  'use strict;'

  angular.module('public')
    .controller('MyinfoController', MyinfoController);

  MyinfoController.$inject = ['userPreferences'];
  function MyinfoController(userPreferences){
    var myinfo = this;

    myinfo.userPreferences = userPreferences;

    myinfo.hasUserPreferences = function() {
      return userPreferences ? true : false;
    }
  }

})();
