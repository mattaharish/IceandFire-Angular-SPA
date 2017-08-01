myApp.controller( 'viewController', [ '$http', '$routeParams', function (
  $http, $routeParams ) {

  var main = this;

  this.singleData;
  this.baseUrl = "https://anapioficeandfire.com/api/";
  this.bch = $routeParams.bch;
  console.log( this.bch );
  this.value = $routeParams.value;
  this.addon = this.bch + "/" + this.value;

  this.mainUrl = this.baseUrl + this.addon;
  console.log( this.mainUrl );
  this.getDetails = function () {
    $http( {
      method: "GET",
      url: main.mainUrl
    } ).then( function successCallback( response ) {
      main.singleData = response.data;
      console.log( main.singleData );
      if ( main.bch == 'books' )
        main.getCharactersInBooks();
      if ( main.bch == 'characters' )
        main.getBooksInCharacters();
      if ( main.bch == 'houses' )
        main.getHouseCharacters();
    }, function errorCallback( response ) {

      //alert( "some error occurred. Check the console." );
      console.log( response );

    } );
  }
  this.getDetails();

  this.charactersArray = [];
  this.povs = [];
  this.allegiancesh = [];
  this.books = [];
  this.povBooks1 = [];
  this.cadet = [];
  this.sworn = [];
  this.lordLoaded;
  this.overLordLoaded;

  this.getCharactersInBooks = function () {

    main.base = "https://anapioficeandfire.com/api/characters/";
    for ( var i = 0; i < main.singleData.characters.length; i++ ) {

      if ( main.singleData.characters[ i ].slice( 0, 45 ) == main.base ) {
        main.url = main.singleData.characters[ i ];
      } else {
        main.temp = main.singleData.characters[ i ].slice( 23 );
        main.url = main.base + main.temp;
      }
      $http( {
        method: "GET",
        url: main.url
      } ).then( function successCallback( response ) {
        var temp = response.data;

        main.charactersArray.push( temp.name );
      }, function errorCallback( response ) {
        //alert( "some error occurred. Check the console." );

      } );
    }

    for ( var i = 0; i < main.singleData.povCharacters.length; i++ ) {

      if ( main.singleData.povCharacters[ i ].slice( 0, 45 ) == main.base ) {
        main.url = main.singleData.povCharacters[ i ];
        console.log( main.url );
      } else {
        main.temp = main.singleData.povCharacters[ i ].slice( 23 );
        main.url = main.base + main.temp;
      }
      $http( {
        method: "GET",
        url: main.url
      } ).then( function successCallback( response ) {
        var temp = response.data;

        main.povBooks1.push( temp.name );
        console.log( temp.name );
      }, function errorCallback( response ) {
        //alert( "some error occurred. Check the console." );

      } );
    }
  }

  this.getHouseCharacters = function () {

    main.base = "https://anapioficeandfire.com/api/characters/";
    for ( var i = 0; i < main.singleData.swornMembers.length; i++ ) {

      if ( main.singleData.swornMembers[ i ].slice( 0, 45 ) == main.base ) {
        main.url = main.singleData.swornMembers[ i ];
      } else {
        main.temp = main.singleData.swornMembers[ i ].slice( 23 );
        main.url = main.base + main.temp;
      }
      $http( {
        method: "GET",
        url: main.url
      } ).then( function successCallback( response ) {
        var temp = response.data;

        main.sworn.push( temp.name );
      }, function errorCallback( response ) {
        //alert( "some error occurred. Check the console." );

      } );
    }

    this.getLord = function () {
      $http( {
        method: "GET",
        url: main.singleData.currentLord
      } ).then( function successCallback( response ) {
        main.lordLoaded = response.data.name;

      }, function errorCallback() {
        console.log( response );
      } )
    }
    this.getLord();

    this.getOverLord = function () {
      $http( {
        method: "GET",
        url: main.singleData.overlord
      } ).then( function successCallback( response ) {
        main.overLordLoaded = response.data.name;
        console.log( main.overLordLoaded );

      }, function errorCallback() {
        console.log( response );
      } )
    }
    this.getOverLord();

    for ( var i = 0; i < main.singleData.cadetBranches.length; i++ ) {

      if ( main.singleData.cadetBranches[ i ].slice( 0, 45 ) == main.base ) {
        main.url = main.singleData.cadetBranches[ i ];
        console.log( main.url );
      } else {
        main.temp = main.singleData.cadetBranches[ i ].slice( 23 );
        main.url = main.base + main.temp;
      }
      $http( {
        method: "GET",
        url: main.url
      } ).then( function successCallback( response ) {
        var temp = response.data;

        main.cadet.push( temp.name );
        console.log( temp.name );
      }, function errorCallback( response ) {
        //alert( "some error occurred. Check the console." );

      } );
    }
  }

  this.getBooksInCharacters = function () {

    main.base = "https://anapioficeandfire.com/api/books/";
    main.base1 = "https://anapioficeandfire.com/api/houses/";

    for ( var i = 0; i < main.singleData.books.length; i++ ) {

      if ( main.singleData.books[ i ].slice( 0, 40 ) == main.base ) {
        main.url = main.singleData.books[ i ];
      } else {
        main.temp = main.singleData.books[ i ].slice( 18 );
        main.url = main.base + main.temp;
        console.log( main.url );
      }

      $http( {
        method: "GET",
        url: main.url
      } ).then( function successCallback( response ) {
        var temp = response.data;

        main.books.push( temp.name );
      }, function errorCallback( response ) {
        //alert( "some error occurred. Check the console." );

      } );
    }

    for ( var i = 0; i < main.singleData.povBooks.length; i++ ) {
      if ( main.singleData.povBooks[ i ].slice( 0, 40 ) == main.base ) {
        main.url = main.singleData.povBooks[ i ];
      } else {
        main.temp = main.singleData.povBooks[ i ].slice( 19 );
        main.url = main.base + main.temp;
      }

      $http( {
        method: "GET",
        url: main.url
      } ).then( function successCallback( response ) {
        var temp = response.data;

        main.povs.push( temp.name );
      }, function errorCallback( response ) {
        //alert( "some error occurred. Check the console." );

      } );
    }

    for ( var i = 0; i < main.singleData.allegiances.length; i++ ) {
      console.log( main.singleData.allegiances[ i ] );
      if ( main.singleData.allegiances[ i ].slice( 0, 41 ) == main.base1 ) {
        main.url = main.singleData.allegiances[ i ];
        console.log( main.url );

      } else {
        main.temp = main.singleData.allegiances[ i ].slice( 19 );
        main.url = main.base1 + main.temp;
      }

      $http( {
        method: "GET",
        url: main.url
      } ).then( function successCallback( response ) {
        var temp = response.data;
        main.allegiancesh.push( temp.name );
        console.log( temp.name );
      }, function errorCallback( response ) {
        //alert( "some error occurred. Check the console." );
        console.log( response );
      } );
    }
  }

} ] ); // end controller
