
var mousetimeout;
var screensaver_active = false;
var idletime = 30;

function show_screensaver(){
    $('#screensaver').fadeIn();
    screensaver_active = true;
    screensaver_animation();
}

function stop_screensaver(){
    $('#screensaver').hide();
    screensaver_active = false;
}

$(document).mousemove(function(){
    clearTimeout(mousetimeout);

    if (screensaver_active) {
        stop_screensaver();
    }

    mousetimeout = setTimeout(function(){
        show_screensaver();
    }, 1000 * idletime); // 5 secs
});

function screensaver_animation(){
    if (screensaver_active) {
        $('#screensaver').animate(
            screensaver_animation);
    }
}
