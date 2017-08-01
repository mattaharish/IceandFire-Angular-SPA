myApp.directive( "characterSingleView", function () {
  return {
    restrict: "E",
    templateUrl: "../views/character-single-view.html",
    controller: function ( $scope ) {
      //console.log( "Directive Scope: Character" );
      //console.log( $scope.singleData.name );
    }
  }
} );
