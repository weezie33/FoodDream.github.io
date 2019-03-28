// initial testing
let apikey =  	"&apikey=2ff458e3e36ac3751209b898369ec5bd";
let url = "http://api.musixmatch.com/ws/1.1/ track.search?q="
let param = "&country=us"

let baseUrl = "https:\/\/tracking.musixmatch.com\/t1.0\/3vUCAP8440S6Sk7DuqRzasSEUwaXt--FlCVXVneejDfC2unGzEVZ4rj1th-68BgHiVWF2rAFn8t54CRrgLDhh7dMYkql-9ylfgWbhzYRwlXtWNCj6i5CXcHFMH9C31ZkTRW0yCi-FY4kPFpucR2g4motP3PZ4var0wCniwN8_FcHJKBl2A7HK-uqPiV0lu0s7vGEqMIjlKVXPFG27eEhGUHMNUX0vM9fDJ4IenYvwhNRMtcD6FGIm0vbXyIfll9EEqrYmsoslvb3tOv9jftAsQvE_bIoCn37c4NnxZs\/"
let tracksearch = "track.search?q="
$("#add-art").on("click",function(event){
    event.preventDefault();
    let searchInput = $("#art-show").val().trim();
    $("#art-show").val("")


    $.ajax({
        // url: 'https://api.musixmatch.com/ws/1.1/track.search?q=drake&apikey=2ff458e3e36ac3751209b898369ec5bd',
        url: baseUrl+tracksearch+searchInput,
        method: "GET",
    }).then(function(response){
        $("#searchDump").append(response)
    })


    console.log(searchInput);
})