/*
// ----------------------------------------------------------------------------
// Create variables to hold details about the message and not initialized
var greeting = '[not initialized]' ; 
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

// ----------------------------------------------------------------------------
// Create variables to hold details about the sign and not initialized
var sign = '[not initialized]';
var tiles = '[not initialized]';
var subTotal = '[not initialized]';
var shipping = '[not initialized]';
var grandTotal = '[not initialized]';


// ----------------------------------------------------------------------------
// Set text generic function
function setTextContentById(getId, setText){
  // Get ID
  var el = document.getElementById(getId);
  // Set text
  el.textContent = setText;  
}
// ----------------------------------------------------------------------------
// Set text generic function with dollar sign
function setTextPlusDollarSign(getId, setText){
  // Get ID
  var el = document.getElementById(getId);
  // Set text
  el.textContent = '$' + setText;  
}
// ----------------------------------------------------------------------------
function initiateVars() {
  greeting = 'Howdy ';
  name = 'Molly';
  message = ', please check your order:';
  welcome = greeting + name + message;
  sign = 'Montague House';
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}


//----------------------------------------------------------------------------
// Function Calls and using a IIFE wrapper
(function(){

  initiateVars();
  setTextContentById('greeting', welcome);
  setTextContentById('userSign', sign);
  setTextContentById('tiles', tiles);
  setTextPlusDollarSign('subTotal', subTotal);
  setTextPlusDollarSign('shipping', shipping);
  setTextPlusDollarSign('grandTotal', grandTotal);
}());


//----------------------------------------------------------------------------
// Creates an action listener and if the Reset button is clicked then
// the variables are reset to "clear".
document.getElementById('reset').addEventListener('click', resetVars).preventDefault();
                                                  
function resetVars(){
  document.getElementById("greeting").innerHTML = "clear";
  document.getElementById("tiles").innerHTML = "clear";
  document.getElementById("subTotal").innerHTML = "clear";
  document.getElementById("shipping").innerHTML = "clear";
  document.getElementById("grandTotal").innerHTML = "clear";
  document.getElementById("userSign").innerHTML = "clear";
}
*/

//-------------------------------------------------------------
$(function(){
  $('#userSignInput').on('keyup', function (e){
        
    var inputLength = $(this).val().length;
    $('#tiles').text(inputLength);
    updatePrice(inputLength);
  })

//-------------------------------------------------------------
// Update price on font checked
  $('#userFontInput').on('click', function (e){
     updatePrice();
  })
//------------------------------------------------------------
// Update price on color checked
  $('#userColorInput').on('click', function (e){
     updatePrice();
  })
//------------------------------------------------------------
//Confirmation on pay button   
  $('#payButton').on('click', function (e){
     var approve = confirm("Are you sure?");
     if(approve){
       alert("Congratulations, your order was processed");
     }
  })
//------------------------------------------------------------
// Reset values
  $('#reset').on('click', function (e){
    $('#userSignInput').val('');
    $('#userFontInput').prop('checked', false);
    $('#userColorInput').prop('checked', false);
    $('#tiles').text(0);
     updatePrice();
  })
})
//-------------------------------------------------------------
  
function updatePrice(){
  var costPerTile = 5;
  var signLength = $('#userSignInput').val().length;
  var fontUpgrade = $('#userFontInput').is(':checked');
  var colorUpgrade = $('#userColorInput').is(':checked');
  
  if(fontUpgrade){
    costPerTile += 1;
  }
  if(colorUpgrade){
    costPerTile += 1;
  }
  
  var subTotal = signLength * costPerTile;
  var shipping = 7;
  
  if(signLength === 0){
    shipping = 0;
  }

  var grandTotal = subTotal + shipping;
  
  $('#subTotal').text('$' +subTotal);
  $('#shipping').text('$' +shipping);
  $('#grandTotal').text('$' +grandTotal);
  
  return grandTotal;
}