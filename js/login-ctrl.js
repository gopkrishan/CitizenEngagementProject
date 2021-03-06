/**
* Controller to manage the login 
*/
angular.module('app').controller('LoginCtrl', function LoginCtrl(AuthService, $http, $log, $state) {
  var login = this;
  login.user = {};

  /**
   *  Login the returned user from ng-model
   */
  login.connect = function connect() {
    delete login.error;

    $http({
      method: 'POST',
      url: 'https://masrad-dfa-2017-g.herokuapp.com/api/auth', //https://citizen-api.herokuapp.com/api/auth',
      data: login.user
    }).then(function(res) {
      AuthService.setToken(res.data.token);
      $state.go('home');
    }).catch(function(error) {
      login.error = "Error while trying to log you in";
      $log.error(error);
    })
  }
});
