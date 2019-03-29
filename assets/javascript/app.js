 
// initial testing
$("#add-art").on("click", function (event) {
    event.preventDefault();

    let lyricInput = $("#art-show").val().trim();
    //clue needs an input field with id
    let clueInput = "";//$("#somthing").val().trim();
    let baseUrl = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?format=json&q_lyrics=" + lyricInput + "&q_track_artist=" + clueInput + "&callback=jsonp&quorum_factor=.06&f_has_lyrics=1&s_track_rating=desc&apikey=2ff458e3e36ac3751209b898369ec5bd"
    $("#art-show").val("")
    // empty out value of clue input here

    $.ajax({
        url: baseUrl,
        method: "GET",
    }).then(function (response) {
        let parsed = JSON.parse(response);
        console.log(parsed);
        let obj = parsed.message.body;
        $("#searchDump").text("");
        for (let i = 0; i < obj.track_list.length; i++) {

            var  newDiv = $("<div>");
           
            newDiv.append(
                $("<p>").text("Track Name: " + obj.track_list[i].track.track_name),
                $("<p>").text("Artist Name: " + obj.track_list[i].track.artist_name),
            )
            newDiv.addClass("output");
            // $("#searchDump").append(JSON.stringify("Track Name " + obj.track_list[i].track.track_name + " Artist Name " + obj.track_list[i].track.artist_name))
            
            $("#searchDump").append(newDiv)
        }

        console.log(obj);
    })


    console.log(lyricInput);
})
$(".output").on ("click", function( event   )   {

    event.preventDefault();
    




})


