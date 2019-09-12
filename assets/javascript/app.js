//starting array for buttons to be displayed on page
var gifs = ["memes", "spongebob", "sports", "anime"];

//function to create gif buttons
function renderButtons() {
    
    $("#gif-buttons").empty();

    for (var i = 0; i < gifs.length; i++) {

        var newGifButton = $("<button>");
        newGifButton.addClass("gif");
        newGifButton.attr("data-name", gifs[i]);
        newGifButton.text(gifs[i]);
        $("#gif-buttons").append(newGifButton);
    }
}
//call the function on page startup so beginning array will show
renderButtons();

//on click function to add new gif buttons to display
$("#add-gif").on("click", function (event) {
    event.preventDefault();

    var gif = $("#gif-input").val().trim();

    gifs.push(gif);

    // Call the renderButtons function to add the new gif as a button
    renderButtons();
});

//this on click function will call on the function displayGif that will append all the gifs to the page
$(document).on("click", ".gif", displayGif);