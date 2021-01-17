$(document).ready(function () {

    var i = 0;

    $("#container").click(function () {
                i++;
                if (i >= 3) {
                    i--;
                    $("#container").css({
                        marginLeft: "-500px"
                    });
                    $("#container").append($("#container").children().first().clone());
                    $("#container").children().first().remove();
                }
                $(this).animate({
                    marginLeft: "-=500px"
                }, 800);

    });
});