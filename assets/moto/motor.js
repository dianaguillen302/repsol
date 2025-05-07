//INICIO

$(document).ready(function() {
    var pantalla = 1;
});

//BOTONES


$("#ref").click(function() {
    pantalla = 1;
    carga();
});
$("#qui").click(function() {
    pantalla = 2;
    carga();
});
$("#glp").click(function() {
    pantalla = 3;
    carga();
});
$("#gen").click(function() {
    pantalla = 4;
    carga();
});
$("#sum").click(function() {
    pantalla = 5;
    carga();
});
$("#lub").click(function() {
    pantalla = 6;
    carga();
});
$("#tra").click(function() {
    pantalla = 7;
    carga();
});
$("#pro").click(function() {
    pantalla = 8;
    carga();
});
$("#des").click(function() {
    pantalla = 9;
    carga();
});
$("#exp").click(function() {
    pantalla = 10;
    carga();
});
$("#sum2").click(function() {
    pantalla = 11;
    carga();
});
$("#mov").click(function() {
    pantalla = 12;
    carga();
});



$(".sig").click(function() {
    if (pantalla == 12) {
        pantalla = 1;
        carga();
    } else {
        pantalla = pantalla + 1;
        carga();
    }
});

$(".ant").click(function() {
    if (pantalla == 1) {
        pantalla = 12;
        carga();
    } else {
        pantalla = pantalla - 1;
        carga();
    }
});

$("body").keydown(function(e) {
    if (e.keyCode == 39) { // left
        if (pantalla == 12) {
            pantalla = 1;
            carga();
        } else {
            pantalla = pantalla + 1;
            carga();
        }
    } else if (e.keyCode == 37) { // right
        if (pantalla == 1) {
            pantalla = 12;
            carga();
        } else {
            pantalla = pantalla - 1;
            carga();
        }
    }
});






function carga() {
    $("#contenido").addClass("display");
    $("#animaciones").removeClass();
    $(".blanco").removeClass("capave");
    $("#animaciones").addClass("punto" + pantalla);
    $("#capa").addClass("capave");
    $("#blanco" + pantalla).addClass("capave");
    $(".ampliador").fadeOut();
    $('#concon').html($('#art' + pantalla).html());
    console.log(pantalla);
}





$(".cerrar").click(function() {
    $(".blanco").removeClass("capave");
    $("#animaciones").removeClass();
    $("#capa").removeClass("capave");
    $(".ampliador").fadeIn();
});

$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $(".blanco").removeClass("capave");
        $("#animaciones").removeClass();
        $("#capa").removeClass("capave");
        $(".ampliador").fadeIn();
    }
});