$(document).ready(function () {

    $("button").tooltip();

    $('#enviar_correo').click(function () {

        alert("Correo enviado correctamente");
    });

    $(".ingredientes").click(function () {

        $(this).css({
            "color": "red"
        });

        $(".preparacion").css({
            "color": "#373A3C"
        });
    })

    $(".preparacion").click(function () {

        $(this).css({
            "color": "red"
        });

        $(".ingredientes").css({
            "color": "#373A3C"
        });
    });

    $('.card-title').click(function(){
        $('.recetas-relacionadas p').toggle("hide");
    });

});