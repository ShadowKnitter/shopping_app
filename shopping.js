$(document).ready(function () {

    $("#searchBtn").on("click", function () {
        var search = $("#searchBar")[0].value;
        console.log(search);
        console.log(data);
        // $.getJSON('./api/search/'+search, function (data) {
        //     console.log('Data received:', data);
        // }).fail(function (jqXHR, textStatus, errorThrown) {
        //     console.error('Request failed:', textStatus, errorThrown);
        // });

        var displayedData = {
            displayTitle: data[0].title,
            displayPrice: data[0].price,
            displarRating: data[0]

        }

    });
});
