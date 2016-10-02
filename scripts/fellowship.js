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


  // create an `aside` tag, aside into rivendell h1

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

  $('#middle-earth').children('article')[0].children[1].remove();

  // select Rivendell

  var rivendellLocation = $('h1:contains("Rivendell")');


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
    $(rivendell).after(fellowshipDiv);
    var list = $('<ul id = fellowship-list>');
    $('#the-fellowship').append(list);


    // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
    // after each character is added make an alert that they // have joined your party
    

    var frodo = $('li:contains("Frodo")');
    var clonedFrodo = $('li:contains("Frodo")').clone();
    frodo.remove();
    $('#fellowship-list').append(clonedFrodo);
    alert("Frodo has moved his ass over to The Fellowship");


    var samwise = $('li:contains("Samwise")');
    var clonedSamwise = $('li:contains("Samwise")').clone();
    samwise.remove();
    $('#fellowship-list').append(clonedSamwise);
    alert("Samwise has moved his ass over to The Fellowship");


    var meriadoc = $('li:contains("Meriadoc")');
    var clonedMeriadoc = $('li:contains("Meriadoc")').clone();
    meriadoc.remove();
    $('#fellowship-list').append(clonedMeriadoc);
    alert("Meriadoc has moved his ass over to The Fellowship");

    
    var peregrin = $('li:contains("Peregrin")');
    var clonedPeregrin = $('li:contains("Peregrin")').clone();
    peregrin.remove();
    $('#fellowship-list').append(clonedPeregrin);
    alert("Peregrin has moved his ass over to The Fellowship");    


    var gandalf = $('li:contains("Gandalf")');
    var clonedGandalf = $('li:contains("Gandalf")').clone();
    gandalf.remove();
    $('#fellowship-list').append(clonedGandalf);
    alert("Gandalf has moved his old ass over to The Fellowship"); 


    var legolas = $('li:contains("Legolas")');
    var clonedLegolas = $('li:contains("Legolas")').clone();
    legolas.remove();
    $('#fellowship-list').append(clonedLegolas);
    alert("Legolas has moved his ass over to The Fellowship");    


    var gimli = $('li:contains("Gimli")');
    var clonedGimli = $('li:contains("Gimli")').clone();
    gimli.remove();
    $('#fellowship-list').append(clonedGimli);
    alert("Gimli has moved his ass over to The Fellowship"); 


    var aragorn = $('li:contains("Aragorn")');
    var clonedAragorn = $('li:contains("Aragorn")').clone();
    aragorn.remove();
    $('#fellowship-list').append(clonedAragorn);
    alert("Aragorn has moved his ass over to The Fellowship"); 


    var boromir = $('li:contains("Boromir")');
    var clonedBoromir = $('li:contains("Boromir")').clone();
    boromir.remove();
    $('#fellowship-list').append(clonedBoromir);
    alert("Boromir has moved his ass over to The Fellowship"); 

    var divRing = $('<div>').prop('id', 'the-ring').prop('class', 'magic-imbued-jewelry');
    $('li:contains("Frodo")').append(divRing);


    var emptyAside = $('#middle-earth').children('article')[1].children[0].children[0];
    emptyAside.remove();

    var emptyUl = $('#middle-earth').children('article')[1].children[0].children[0];
    emptyUl.remove();
}

forgeTheFellowship();




///   Part 8  ///



function theBalrog(){


  // change the `'Gandalf'` text to `'Gandalf the White'`

  $('li:contains("Gandalf")').text("Galdalf the White");
  console.log('Galdalf\'s old ass just got wiser');

  // apply the following style to the element, make the // background 'white', add a grey border

  $('li:contains("Galdalf the White")').prop('id', 'gDawg');
  $('#gDawg').css('background-color', '#FFFFFF');
  $('#gDawg').css('border', '5px solid gray');
  $('#gDawg').css('width', '33%');
}

theBalrog();



///   PART 9  ///



function hornOfGondor() {

  // pop up an alert that the horn of gondor has been blown

  alert('The horn of Gondor has been blown!');

  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship

  var peaceBoromir = $('li:contains("Boromir")');
  peaceBoromir.remove();

}

hornOfGondor();



///   PART 10   ///



function itsDangerousToGoAlone() {


  // add a div with an id of `'mount-doom'` to `Mordor`

  var mountDoom = $('<div id="mount-doom">');
  var mordor = $('h1:contains("Mordor")');
  mordor.after(mountDoom);
  var mordorList = $('<ul id="mordorGang">');
  mountDoom.append(mordorList)


  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor` 
  

  var supFrodo = $('li:contains("Frodo")');
  var supClonedFrodo = $('li:contains("Frodo")').clone();
  supFrodo.remove();
  $('#mordorGang').append(supClonedFrodo);

  var supSam = $('li:contains("Samwise")');
  var supClonedSam = $('li:contains("Samwise")').clone();
  supSam.remove();
  $('#mordorGang').append(supClonedSam);

}

itsDangerousToGoAlone();




///   PART 11   ///



function weWantsIt() {


   // Create a div with an id of `'gollum'` and add div gollum to Mordor, 

   var gollumDiv = $('<div id="gollum">');
   $('h1:contains("Mordor")').after(gollumDiv);

   // Remove `the ring` from `Frodo` and give it to `Gollum`

    var ringFrodo = $('#the-ring');
    var clonedRingFrodo = $('#the-ring').clone();
    ringFrodo.remove();
    $('#gollum').append(clonedRingFrodo);

   // Move Gollum into Mount Doom

    $('#mount-doom').append($('#gollum'));  

}

weWantsIt();



///   PART 12   ///  WHEWWWWWWWWWWWWWWW ////


function thereAndBackAgain(){

  // remove `Gollum` and `the Ring` from the document

  $('#gollum').remove();  

  // Move all the `hobbits` back to `the shire`

  var helloAgainShire = $('h1:contains("The Shire")');
  var shireList = $('<ul id = shire-list>')
  $(helloAgainShire).after(shireList);

  var frodo = $('li:contains("Frodo")');
  var clonedFrodo = $('li:contains("Frodo")').clone();
  frodo.remove();
  $(shireList).append(clonedFrodo);


  var samwise = $('li:contains("Samwise")');
  var clonedSamwise = $('li:contains("Samwise")').clone();
  samwise.remove();
  $(shireList).append(clonedSamwise);

  var meriadoc = $('li:contains("Meriadoc")');
  var clonedMeriadoc = $('li:contains("Meriadoc")').clone();
  meriadoc.remove();
  $(shireList).append(clonedMeriadoc);

  
  var peregrin = $('li:contains("Peregrin")');
  var clonedPeregrin = $('li:contains("Peregrin")').clone();
  peregrin.remove();
  $(shireList).append(clonedPeregrin);
  
}

thereAndBackAgain();













