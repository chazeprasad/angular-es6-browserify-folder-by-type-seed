describe('Unit: HomeController', function() {

  let $controller, ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject( _$controller_ => {
      $controller = _$controller_;
      // var $scope = {};
      ctrl = $controller('HomeController');
    });
  });

  it('Should exist', function() {
    expect(ctrl).toBeDefined();
  });
  it('Should title to be Home...', function() {
    expect(ctrl.title).toEqual('Home...')
  });
});
