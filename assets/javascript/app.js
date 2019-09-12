//starting array for buttons to be displayed on page
var gifs = ["memes", "spongebob", "sports", "anime", "coding", "dogs", "cats"];

//function to create gif buttons
function renderButtons() {

    $("#gif-buttons").empty();

    for (var i = 0; i < gifs.length; i++) {

        var newGifButton = $("<button>");
        newGifButton.addClass("gif-button");
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
$(document).on("click", ".gif-button", displayGif);

//this gif will reach the giphy api with ajax and append gifs to the page
function displayGif() {

    //empties out gifs so only 10 will display at a time to not clutter the screen with past searches
    $("#gifs-here").empty();

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=9t5U6uBQDsEFQdcXhjan5xbzlGvGDCKj&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++){
            
            var newGif = $("<div>");

            var gifRating = $("<p id='rating'>").text("Rating: " + results[i].rating);
            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.fixed_height_still.url);
            gifImage.attr("data-still", results[i].images.fixed_height_still.url);
            gifImage.attr("data-animate", results[i].images.fixed_height.url);
            gifImage.attr("data-state", "still");
            gifImage.addClass("gif");

            newGif.append(gifRating);
            newGif.append(gifImage);

            $("#gifs-here").append(newGif);
        }

    });
}

//this function will allow users when they click the gif to animate and stop
$(document).on("click", ".gif", function() {

    var state = $(this).attr("data-state");

    if (state === "still"){
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});
