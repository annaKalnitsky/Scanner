$(document).ready(function() {
    const target = document.querySelector('li.section:last-child');
    const observer = new MutationObserver(function() {
        $("#once-popup").fadeIn();
    });

    observer.observe(target, {
        attributes: true,
    });
        
    $('#popup-close').click(function(e) {
        $('#once-popup').fadeOut();
    });
    $('#once-popup').click(function(e) {
        $('#once-popup').fadeOut();
    });

        
});