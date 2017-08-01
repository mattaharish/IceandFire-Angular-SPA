myApp.config( [ '$routeProvider', function ( $routeProvider ) {
  $routeProvider
    .when( '/', {
      // location of the template
      templateUrl: 'views/index-view.html',
      // Which controller it should use
      controller: 'mainController',
      // what is the alias of that controller.
      controllerAs: 'all'
    } )
    .when( '/singleview/:bch/:value', {
      templateUrl: 'views/GOT-view.html',
      controller: 'viewController',
      controllerAs: 'singleView'
    } )

  .otherwise( {
    template: '<h1>404 page not found</h1>'
  } );
} ] );
