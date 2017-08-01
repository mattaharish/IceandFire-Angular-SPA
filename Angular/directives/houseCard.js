myApp.directive( "houseCard", function () {
  return {
    restrict: "E",
    templateUrl: "../views/house-card.html",
    controller: function ( $scope ) {
      //console.log( "Directive Scope: Character" );
      //console.log( $scope.item.name );
    }
  }
} );
