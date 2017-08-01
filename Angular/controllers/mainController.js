myApp.controller( 'mainController', [ '$http', function ( $http ) {

  var main = this;

  this.bch = [];
  this.characters;
  this.books;
  this.houses;
  this.onlyBooks;
  this.onlyHouses;
  this.onlyCharacters;
  this.temp;

  this.changeCharacterFilter = function () {
    this.onlyCharacters = '';
    this.onlyHouses = this.temp;
    this.onlyBooks = this.temp;
  }

  this.changeHouseFilter = function () {
    this.onlyCharacters = this.temp;
    this.onlyHouses = '';
    this.onlyBooks = this.temp;
  }

  this.changeBookFilter = function () {
    this.onlyCharacters = this.temp;
    this.onlyHouses = this.temp;
    this.onlyBooks = '';
  }

  this.charactersUrl =
    'https://anapioficeandfire.com/api/characters/';
  this.housesUrl =
    'https://anapioficeandfire.com/api/houses/';
  this.booksUrl =
    'https://anapioficeandfire.com/api/books/';

  this.loadCharacters = function () {
    $http( {
      method: 'GET',
      url: main.charactersUrl
    } ).then( function successCallback( response ) {

      main.characters = response.data;
      console.log( main.characters );

    }, function errorCallback( response ) {

      alert( "some error occurred. Check the console." );
      console.log( response );

    } );

  }

  this.loadCharacters();

  this.loadHouses = function () {
    $http( {
      method: 'GET',
      url: main.housesUrl
    } ).then( function successCallback( response ) {

      main.houses = response.data;
      console.log( main.houses );

    }, function errorCallback( response ) {

      alert( "some error occurred. Check the console." );
      console.log( response );

    } );

  }

  this.loadHouses();

  this.loadBooks = function () {
    $http( {
      method: 'GET',
      url: main.booksUrl
    } ).then( function successCallback( response ) {

      main.books = response.data;
      console.log( main.books );
      //console.log( main.characters );
      main.loadAll();

    }, function errorCallback( response ) {

      alert( "some error occurred. Check the console." );
      console.log( response );

    } );
  }

  this.loadBooks();

  this.loadAll = function () {

    for ( i = 0; i < main.books.length; i++ ) {
      main.bch.push( main.books[ i ] );
    }
    for ( i = 0; i < main.characters.length; i++ ) {
      main.bch.push( main.characters[ i ] );
    }
    for ( i = 0; i < main.houses.length; i++ ) {
      main.bch.push( main.houses[ i ] );
    }
    console.log( main.bch );
  }

  this.filterName = 'name';
  this.changeFilter = function () {
    this.filterName = '-name';
  }

  this.changeFilterCorrect = function () {
    this.filterName = 'name';
  }


} ] ); // end controller
