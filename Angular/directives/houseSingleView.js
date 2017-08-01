myApp.directive( "houseSingleView", function () {
  return {
    restrict: "E",
    templateUrl: "../views/house-single-view.html",
    controller: function ( $scope ) {
      //console.log( "Directive Scope: Character" );
      //console.log( $scope.singleData.name );
    }
  }
} );
