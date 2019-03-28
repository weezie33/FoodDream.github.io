// initial testing
let apikey =  	"&apikey=2ff458e3e36ac3751209b898369ec5bd";



let param = "&country=us"
let lyricMatch= "matcher.lyrics.get"
let lyricsTrack

let tracksearch = "track.search?q="
$("#add-art").on("click",function(event){
    event.preventDefault();
    
    let searchInput = $("#art-show").val().trim();
    let baseUrl = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?format=json&q="+searchInput+"&callback=jsonp&quorum_factor=1&apikey=2ff458e3e36ac3751209b898369ec5bd"
    $("#art-show").val("")


    $.ajax({
        url: baseUrl,
        method: "GET",
    }).then(function(response){
        let parsed = JSON.parse(response);
        let obj = parsed.message.body;
        for(let i = 0; i <obj.track_list.length; i++){
            $("#searchDump").append(JSON.stringify("trackname "+obj.track_list[i].track.track_name+" Artist Name "+obj.track_list[i].track.artist_name ))
        }
        
        console.log(obj);
    })


    console.log(searchInput);
})