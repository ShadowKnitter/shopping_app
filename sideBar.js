$(document).ready(function () {
    var budget = 284.01;
    var fCost = 0;
    

    var cart = [];
    var wishlist = [];

    var itemName = "ITEM NAME";  
    var image = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSb8nIy98Ly48KmBz0Qum7VhizUUfMrMY8zBr7KGT8gVup9atw_jYQ28kBh_xdDrUjSAjvF-xZ31qy6q8iYjKJgxLnpnPJWx8a8a-j5XjFrTMn9yOPbfuI";
    var url = "https://www.google.com/search?ibp=oshop&q=Macbook&prds=catalogid:592209059139430148,productid:11531162310095970272,headlineOfferDocid:16026323275453799959,imageDocid:14971461360516834628,rds:PC_8602998232814770163|PROD_PC_8602998232814770163,gpcid:8602998232814770163,mid:576462562025329966,pvt:hg&hl=en&gl=us&udm=28"
    var price = 10.99;
    var oldPrice = 100.99;
    var rating = 1.5;
    var ratingColor;



    $("#budget").text(budget.toFixed(2));
    $("#items").text(cart.length);
    $("#fCost").text("0.00");


    $("#itemName").text(itemName);
    $("#image").attr("src", image);
    $("#url").attr("url", url);
    $("#linkBtn").on("click", function(){
        window.open(url, '_blank');
    });
    $("#price").text(price.toFixed(2));
    $("#oldPrice").text(oldPrice.toFixed(2));
    $("#percentOff").text(100-(oldPrice/price).toFixed(0));

    $("#rating").text(rating);
    $("#ratingBar").attr("aria-valuenow", rating);
    $("#ratingBar").attr("style", "width: "+(rating/5*100)+"%");
    if(rating<=2){ratingColor = "bg-danger"}
    else if(rating<=3){ratingColor = "bg-warning"}
    else if(rating<=4){ratingColor = "bg-info"}
    else{ratingColor = "bg-success"}
    $("#ratingBar").attr("class", "progress-bar progress-bar-striped progress-bar-animated "+ratingColor);

    $("#addToCartBtn").on("click", function(){
        cart.push(price);
        $("#items").text(cart.length);
        var total = 0;
        for(var i = 0; i<cart.length; i++){
            total += cart[i];
        }
        $("#fCost").text(total.toFixed(2));

    });
    $("#cartBtn").on("click", function(){
        for(var i = 0; i<cart.length; i++){
            console.log(cart[i]);
        }
    });

    $("#addToWishlistBtn").on("click", function(){
        wishlist.push(itemName);
    });
    $("#wishlistBtn").on("click", function(){
        for(var i = 0; i<wishlist.length; i++){
            console.log(wishlist[i]);
        }
    });
});