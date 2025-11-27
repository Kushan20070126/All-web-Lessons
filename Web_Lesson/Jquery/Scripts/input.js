
$('#button').on("click",function(){

    let value = $("#value").val(); // read input

    let cont = `<li>${value}</li>`; // creata new list item

    $('#list').append(cont); // add it to existing content

    $("#value").val(""); // clear text feild


});

// Event delegation bind to a parent element that is already available
$('#list').on('click','li',function() {

    $(this).remove();
     
});