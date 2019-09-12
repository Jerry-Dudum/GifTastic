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
renderButtons();