myApp.directive( "bookCard", function () {
  return {
    restrict: "E",
    templateUrl: "../views/book-card.html",
    controller: function ( $scope ) {
      //console.log( "Directive Scope: Character" );
      console.log( $scope.item.name );
    }
  }
} );
