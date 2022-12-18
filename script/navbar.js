$(document).ready(function () {
    $('body').prepend($('<div/>', {
        class: "navbar"
    }).append($('<div/>').append(
        [
            $("<a>").attr("href", "./index.html").append([$("<p>").append("01").css({ "display": "inline", "font-size": "17px" }), "Home"]),
            $("<a>").attr("href", "./blog.html").append([$("<p>").append("02").css({ "display": "inline", "font-size": "17px" }), "Books"]),
            $("<a>").attr("href", "./contact.html").append([$("<p>").append("03").css({ "display": "inline", "font-size": "17px" }), "Contact"])
        ]
    )));

    $(".navbar").css({
        "text-transform": "uppercase",
        "background-color": "white",
        "position": "fixed",
        "top":"0px",
        "right":"-1vw",
        "padding":"10px",
        "font-weight": "800",
        "width": "100vw",
        "font-size": "4vh",
        "z-index": "100",

    });
    $(".navbar div").css({
        "display": "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "gap": "20px"
    });
    $(".navbar a").css({
        "text-decoration": "none",
        "color": "black"
    }).hover(function(){
        $(this).css("color","#06066D")
    }).mouseout(function(){
        $(this).css("color","black")
    });
    
});
