// Change the text content of h1 element with id topic to 'simplified DOM with JQuery' and 
// text color to red when user moves mouse pointer over the element 
/*---------------------------------------------------------------------------------------- */
$("#topic").on("mouseover",()=>{

    $("#topic").text("Simplified DOM with JQuery").css("color",'red');

});

/*---------------------------------------------------------------------------------------- */

// Change the content back to DOM with JQuery and color to back when user move mouse 
// pointer away from h1 element with id topic
/*---------------------------------------------------------------------------------------- */

$("#topic").on("mouseleave",()=>{

    $("#topic").text("DOM with JQuery").css("color",'black');

});
/*---------------------------------------------------------------------------------------- */

//change the background color of the elements with class "feature-exp" to yellow
//when user clicks on their content. Make sure you are changing the background color
// only for the element thst was clicked
/*---------------------------------------------------------------------------------------- */

$('.feature-exp').on('click', function() {
    
    $(this).css('background-color', 'yellow');
    // this keyword is used to select only the element which triggered the event
});
/*---------------------------------------------------------------------------------------- */

// change the font size to 30px and color to blue for every h2 element when mouse went over
//them. make sure to apply change only for the element that mouse over happenned.
/*---------------------------------------------------------------------------------------- */

$('h2').on('click', function() {

    $(this).css('font-size','30px').css('color','blue');
     
});
/*---------------------------------------------------------------------------------------- */

// read the value entered into input field and display a poper content within the div when 
//user clicks on the button
/*---------------------------------------------------------------------------------------- */

$('#btn-request').on('click',function() {

    //Read input
    let email = $("#email").val();
    let content = `<h4>your enrollment will be confirmed using email sent to ${email}</h4>`;
    //set HTML CONTENT

    $('#message').html(content);
});
/*---------------------------------------------------------------------------------------- */

// 




