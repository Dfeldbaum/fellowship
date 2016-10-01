console.log("Linked.");


// var article = $('<article>');


// GLOBAL VARIABLES !!!!

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var section = $('<section>');

var body = $('body');


// Part 1
// create a section tag with an id of `middle-earth`
// add each land as an `article` tag
// inside each `article` tag include an `h1` with the name of the land
// append `middle-earth` to your document `body`



function makeMiddleEarth () {

  var lands = ['The Shire', 'Rivendell', 'Mordor'];
  

  body.append(section)   

  section.prop('id', 'middle-earth');

  $.each(lands, function(index, value) {
    $('#middle-earth').append('<article>' + '<h1>' + value + '</h1>' + '</article>');
  });

  } 



makeMiddleEarth();


// Part 2

// display an `unordered list` of hobbits in the shire
// (which is the second article tag on the page)
// give each hobbit a class of `hobbit`

function makeHobbits () {


  var hobbitShire = $('#middle-earth').children('article')[0]; // selecting first 


  var hobbits = [
    'Frodo Baggins',
    'Samwise \'Sam\' Gamgee',
    'Meriadoc \'Merry\' Brandybuck',
    'Peregrin \'Pippin\' Took'];  
   
  var list = $('<ul>');
  var hobbit = $(hobbitShire).append(list);

  $.each(hobbits, function(index, value) {
    $(list).append('<li class="hobbit">' + value + '</li>');

    });



}


makeHobbits();


// Part 3 

function keepItSecretKeepItSafe(){
  
// create a div with an id of `'the-ring'`
// give the div a class of `'magic-imbued-jewelry'`
// add the ring as a child of `Frodo`
  
  

  // var frodo = 

  var divRing = $('<div>').prop('id', 'the-ring').prop('class', 'magic-imbued-jewelry');
  // frodo.append(divRing)







}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
}

makeBuddies();

function beautifulStranger(){
  // your answers here
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
}

theBalrog();

function hornOfGondor() {
  // your answers here
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
}

thereAndBackAgain();
