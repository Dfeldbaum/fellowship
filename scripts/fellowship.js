console.log("Linked.");



// GLOBAL VARIABLES !!!!


var section = $('<section>');

var body = $('body');


///   PART 1   ///


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



///  PART 2  /// 

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



///  PART 3   /// 



function keepItSecretKeepItSafe() {
  


// create a div with an id of 'the-ring', give the div a class of `'magic-imbued-jewelry'`
  var divRing = $('<div>').prop('id', 'the-ring').prop('class', 'magic-imbued-jewelry');

// assign id to frod
// add the ring as a child of `Frodo`

 $('.hobbit:first').append(divRing);
  
}

keepItSecretKeepItSafe();



///   PART 4   ///


function makeBuddies(){


  // create an `aside` tag, ass aside into rivendell h1

  var aside = $('<aside>');



  var rivendell = $('#middle-earth').children('article')[1].children[0];

  $(rivendell).append(aside);
  console.log('code is working');

  // add ul in aside

  var rivendellList = $('<ul>');

  var rivendellAside = $($('#middle-earth').children('article')[1].children[0].children[0]).append(rivendellList);

  var buddies = [
    'Gandalf the Grey',
    'Legolas',
    'Gimli',
    'Strider',
    'Boromir'
  ];


  $.each(buddies, function(index, value) {
    $(rivendellList).append('<li>' + value + '</li>');

    });

}

makeBuddies();


///   Part 5  ///



function beautifulStranger(){

  // change the `'Strider'` text to `'Aragorn'`

  $('li:contains("Strider")').text("Aragorn");
  console.log('strider you are now Aragorn, dawg');
}


beautifulStranger();




///  Part 6  ///



function leaveTheShire(){
 

  // assemble the `hobbits` and move them to `rivendell`

  $('#middle-earth').children('article')[0].children[1].remove()

  // select Rivendell

  var rivendellLocation = $('h1:contains("Rivendell")')


  var hobbits = [
    'Frodo Baggins',
    'Samwise \'Sam\' Gamgee',
    'Meriadoc \'Merry\' Brandybuck',
    'Peregrin \'Pippin\' Took'];  
   
  var list = $('<ul>');
  var hobbit = $(rivendellLocation).append(list);

  $.each(hobbits, function(index, value) {
    $(list).append('<li class="hobbit">' + value + '</li>');

    });


}

leaveTheShire();


 ///   Part 7  /// 


function forgeTheFellowship() {


    // create a new div called `'the-fellowship'` within `rivendell`

    var fellowshipDiv = $('<div id="the-fellowship">');
    var rivendell = $('h1:contains("Rivendell")');
    $(rivendell).append(fellowshipDiv)
    var list = $('<ul id = fellowshipList>')
    $('#the-fellowship').append(list)


    // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
    // after each character is added make an alert that they // have joined your party
    

    var frodo = $('li:contains("Frodo")');
    var clonedFrodo = $('li:contains("Frodo")').clone();
    frodo.remove();
    $('#fellowshipList').append(clonedFrodo);
    alert("Frodo has moved his ass over to The Fellowship");


    var samwise = $('li:contains("Samwise")');
    var clonedSamwise = $('li:contains("Samwise")').clone();
    samwise.remove();
    $('#fellowshipList').append(clonedSamwise);
    alert("Samwise has moved his ass over to The Fellowship");


    var meriadoc = $('li:contains("Meriadoc")');
    var clonedMeriadoc = $('li:contains("Meriadoc")').clone();
    meriadoc.remove();
    $('#fellowshipList').append(clonedMeriadoc);
    alert("Meriadoc has moved his ass over to The Fellowship");

    
    var peregrin = $('li:contains("Peregrin")');
    var clonedPeregrin = $('li:contains("Peregrin")').clone();
    peregrin.remove();
    $('#fellowshipList').append(clonedPeregrin);
    alert("Peregrin has moved his ass over to The Fellowship");    


    var gandalf = $('li:contains("Gandalf")');
    var clonedGandalf = $('li:contains("Gandalf")').clone();
    gandalf.remove();
    $('#fellowshipList').append(clonedGandalf);
    alert("Gandalf has moved his old ass over to The Fellowship"); 


    var legolas = $('li:contains("Legolas")');
    var clonedLegolas = $('li:contains("Legolas")').clone();
    legolas.remove();
    $('#fellowshipList').append(clonedLegolas);
    alert("Legolas has moved his ass over to The Fellowship");    


    var gimli = $('li:contains("Gimli")');
    var clonedGimli = $('li:contains("Gimli")').clone();
    gimli.remove();
    $('#fellowshipList').append(clonedGimli);
    alert("Gimli has moved his ass over to The Fellowship"); 


    var aragorn = $('li:contains("Aragorn")');
    var clonedAragorn = $('li:contains("Aragorn")').clone();
    aragorn.remove();
    $('#fellowshipList').append(clonedAragorn);
    alert("Aragorn has moved his ass over to The Fellowship"); 


    var boromir = $('li:contains("Boromir")');
    var clonedBoromir = $('li:contains("Boromir")').clone();
    boromir.remove();
    $('#fellowshipList').append(clonedBoromir);
    alert("Boromir has moved his ass over to The Fellowship"); 


    var emptyAside = $('#middle-earth').children('article')[1].children[0].children[0];
    emptyAside.remove();

    var emptyUl = $('#middle-earth').children('article')[1].children[0].children[0];
    emptyUl.remove()
}

forgeTheFellowship();




///   Part 8  ///



function theBalrog(){













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
