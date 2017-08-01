myApp.directive( "characterCard", function () {
  return {
    restrict: "E",
    templateUrl: "../views/character-card.html",
    controller: function ( $scope ) {
      //console.log( "Directive Scope: Character" );


      //console.log( $scope.item.name );
    }
  }
} );
