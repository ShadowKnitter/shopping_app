$(document).ready(function () {
    var budget = 9999.99;
    var items = 0;
    var fCost = 0;
    $("#budget").text(budget);
    $("#items").text(items);
    $("#fCost").text(fCost);

    var itemName = "ITEM NAME";  
    var image = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSb8nIy98Ly48KmBz0Qum7VhizUUfMrMY8zBr7KGT8gVup9atw_jYQ28kBh_xdDrUjSAjvF-xZ31qy6q8iYjKJgxLnpnPJWx8a8a-j5XjFrTMn9yOPbfuI";
    var url = "https://www.google.com/search?ibp=oshop&q=Macbook&prds=catalogid:592209059139430148,productid:11531162310095970272,headlineOfferDocid:16026323275453799959,imageDocid:14971461360516834628,rds:PC_8602998232814770163|PROD_PC_8602998232814770163,gpcid:8602998232814770163,mid:576462562025329966,pvt:hg&hl=en&gl=us&udm=28"
    var cost = 10.99;
    var shipping = 1.00;
    var rating = 1.5;
    var ratingColor;
    $("#itemName").text(itemName);
    $("#image").attr("src", image);
    $("#url").attr("url", url);
    $("#cost").text(cost);
    $("#shipping").text(shipping);
    $("#totalCost").text(cost + shipping);

    $("#rating").text(rating);
    $("#ratingBar").attr("aria-valuenow", rating);
    $("#ratingBar").attr("style", "width: "+(rating/5*100)+"%");
    if(rating<=2){ratingColor = "bg-danger"}
    else if(rating<=3){ratingColor = "bg-warning"}
    else if(rating<=4){ratingColor = "bg-info"}
    else{ratingColor = "bg-success"}
    $("#ratingBar").attr("class", "progress-bar progress-bar-striped progress-bar-animated "+ratingColor);
});