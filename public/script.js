let url = "https://www.google.com/maps/place/"+ prompt("Enter Location")

$(document).ready(function () {

    $.ajax({
        url: url,
        type: "get",
        success: function(res){
            // console.log(res)
            console.log(url)
        }
    })
})