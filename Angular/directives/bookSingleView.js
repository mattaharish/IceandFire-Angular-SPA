myApp.directive( "bookSingleView", function () {
  return {
    restrict: "E",
    templateUrl: "../views/book-single-view.html",
    controller: function ( $scope ) {
      //console.log( "Directive Scope: Character" );
      //console.log( $scope.singleData.name );
    }
  }
} );
