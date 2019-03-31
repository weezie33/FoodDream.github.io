// initial testing
let apikey =  	"&apikey=2ff458e3e36ac3751209b898369ec5bd";

let tracksearch = "track.search?q="
$("#add-music").on("click",function(event){
    event.preventDefault();
    
    let searchInput = $("#music-show").val().trim();
    let baseUrl = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?format=json&q="+searchInput+"&callback=jsonp&quorum_factor=1&apikey=2ff458e3e36ac3751209b898369ec5bd"
    $("#music-show").val("")


    $.ajax({
        url: baseUrl,
        method: "GET",
    }).then(function(response){
        let parsed = JSON.parse(response);
        let obj = parsed.message.body;
        for(let i = 0; i <obj.track_list.length; i++){
            var  newDiv = $("<div>");
            newDiv.append(
            newDiv.append(
                $("<ul>"),
                $("<p>").text("Track Name: " + obj.track_list[i].track.track_name),
                $("<li>").text("Track Name: " + obj.track_list[i].track.track_name),
                $("<p>").text("Artist Name: " + obj.track_list[i].track.artist_name),
                $("<li>").text("Artist Name: " + obj.track_list[i].track.artist_name),
                $("</ul>")
            )
            )
            newDiv.addClass("output");
            $("#searchDump").append(newDiv)
        }
        console.log(obj);
    })
    console.log(searchInput);
})


// const tracksTemplateSource = document.getElementById('tracks-template').innerHTML;
// const tracksTemplate = Handlebars.compile(tracksTemplateSource);
// const $tracks = $('#musicplay');

// $(document).on("click", ".options", function () {

//     let title = $("<div>").attr("title");
//     let artist = $("<div>").attt("artist");
// })


// function firstCall(value) {
//     $.ajax({
//         url: "https://api.napster.com/v2.2/search?apikey=OWI1YTkyYTctMDRjNC00YjgzLWE2ODItYTZkMzFmNzFmMGQy&query=" + value + "&type=track",
//         method: "GET",
//     }).done(function (response) {
//         let id = response.search.order[0];
//         secondCall(id);
//     })
// }

// function secondCall(track) {
//     $.ajax({
//         url: "https://api.napster.com/v2.2/tracks/" + track + "?apikey=OWI1YTkyYTctMDRjNC00YjgzLWE2ODItYTZkMzFmNzFmMGQy",
//         method: "GET"
//     }).then(function (response) {
//         $tracks.html(tracksTemplate(response));
//     })

// }

// firstCall("Say it aint so");
