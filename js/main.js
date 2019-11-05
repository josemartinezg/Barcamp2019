$(document).ready(function () {
    $("#biography").click(function () {
        $(".modal-biography").addClass("open");
        $(".hide-modal").click(function () {
            $(".modal-biography").removeClass("open");
        });
    });


    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    $(".tab a").click(function () {
        let button = $(this);
        button.next().slideToggle('slow', function(){
            if($(this).css("display")  === "block"){
                button.html("Ver menos");
            }else  {
                button.html("Ver más");
            }  
        });
    });
});


$('.control-room-tabs li a').on('click', function (e) {
    let target = $(this).attr('id');
    e.preventDefault();
    $(this).addClass('active');
    $('.control-room-tabs li a ').not($(this)).removeClass('active');
    $('.tabs').find(target).show();
    $('.tabs .tab').not(target).hide();
});
$('.control-room-tabs li a').first().addClass('active');
$('.tabs .tab').first().addClass('open');


