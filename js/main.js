/**
 * @author : Aous Mohammad
 * @name : Animated Slider
 * @description: This slider work with JQuery and animate.css, full responsive, dynamic and have alot of animations
 * @contact : https://www.facebook.com/aous.mohammad.5
 * @notes : you can find all animation classes at the end of file
 */

$(document).ready(function () {
    var i = 1, counter = 0, place = 0;
    var animatedIn = 'animate__backInRight';
    var animatedOut = 'animate__backOutLeft';
    var animated = 'animate__animated';
    var slideIn = 'backInRight';
    var slideOut = 'backOutLeft';
    var animatedInP = 'animate__backInLeft';
    var animatedOutP = 'animate__backOutRight';
    var slideInP = 'backInLeft';
    var slideOutP = 'backOutRight';
    var Childs = $("#slider section").length;
    const animateCSS = (element, animation, prefix = 'animate__') =>
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);
            node.classList.add(`${prefix}animated`, animationName);
        });
    for (counter = Childs; counter > 0; counter--) {
        $('#slider section:nth-child(' + counter + ')').css("zIndex", place += 1);
        // this if you want to slideing in or right with fade
        if (counter != 1) {
            $('#slider section:nth-child(' + counter + ')').css("opacity", "0");
        }
    }
    $('.next').click(function () {
        var cur = '#slider section:nth-child(' + i + ')';
        var next = '#slider section:nth-child(' + (i + 1) + ')';
        var firstChild = '#slider section:nth-child(1)';
        if (i == 1) {
            if ($(cur).hasClass(animatedOut) || $(cur).hasClass(animatedOutP)) {
                $(cur).removeClass();
                animateCSS(cur, slideIn);
            }
            else if ($(cur).hasClass(animatedIn) || $(cur).hasClass(animatedInP)) {
                $(cur).removeClass();
                animateCSS(cur, slideOut);
            }
            else {
                animateCSS(cur, slideOut);
            }
            if ($(next).hasClass(animatedOut) || $(next).hasClass(animatedOutP)) {
                $(next).removeClass();
                animateCSS(next, slideIn);
            }
            else if ($(next).hasClass(animatedIn) || $(next).hasClass(animatedInP)) {
                $(next).removeClass();
                animateCSS(next, slideOut);
            }
            else {
                animateCSS(next, slideIn);
            }
            i += 1;
        }
        else if (i == Childs) {
            $(cur).removeClass();
            animateCSS(cur, slideOut);
            i = 1;
            $(firstChild).removeClass();
            animateCSS(firstChild, slideIn);
        }
        else {
            if ($(cur).hasClass(animatedOut) || $(cur).hasClass(animatedOutP)) {
                $(cur).removeClass();
                animateCSS(cur, slideIn);
            }
            else {
                $(cur).removeClass();
                animateCSS(cur, slideOut);
            }
            if ($(next).hasClass(animatedIn) || $(next).hasClass(animatedInP)) {
                $(next).removeClass();
                animateCSS(next, slideOut);
            }
            else {
                $(next).removeClass();
                animateCSS(next, slideIn);
            }
            i += 1;
        }
    });
    $('.prev').click(function () {
        console.log(i);
        var cur = '#slider section:nth-child(' + i + ')';
        var prev = '#slider section:nth-child(' + (i - 1) + ')';
        var lastChild = '#slider section:nth-child(' + Childs + ')';
        if (i == 1) {
            if ($(cur).hasClass(animatedOut) || $(cur).hasClass(animatedOutP)) {
                $(cur).removeClass();
                animateCSS(cur, slideInP);
            }
            else if ($(cur).hasClass(animatedIn) || $(cur).hasClass(animatedInP)) {
                $(cur).removeClass();
                animateCSS(cur, slideOutP);
            }
            else {
                animateCSS(cur, slideOutP);
            }
            if ($(lastChild).hasClass(animatedOut) || $(lastChild).hasClass(animatedOutP)) {
                $(lastChild).removeClass();
                animateCSS(lastChild, slideInP);
            }
            else if ($(lastChild).hasClass(animatedIn) || $(lastChild).hasClass(animatedInP)) {
                $(lastChild).removeClass();
                animateCSS(lastChild, slideOutP);
            }
            else {
                animateCSS(lastChild, slideInP);
            }
            i = Childs;
        }
        else if (i == 2) {
            if ($(cur).hasClass(animatedOut) || $(cur).hasClass(animatedOutP)) {
                $(cur).removeClass();
                animateCSS(cur, slideInP);
            }
            else {
                $(cur).removeClass();
                animateCSS(cur, slideOutP);
            }
            if ($(prev).hasClass(animatedIn) || $(prev).hasClass(animatedInP)) {
                $(prev).removeClass();
                animateCSS(prev, slideOutP);
            }
            else {
                $(prev).removeClass();
                animateCSS(prev, slideInP);
            }
            i -= 1;
        }
        else {
            if ($(cur).hasClass(animatedOut) || $(cur).hasClass(animatedOutP)) {
                $(cur).removeClass();
                animateCSS(cur, slideInP);
            }
            else {
                $(cur).removeClass();
                animateCSS(cur, slideOutP);
            }
            if ($(prev).hasClass(animatedIn) || $(prev).hasClass(animatedInP)) {
                $(prev).removeClass();
                animateCSS(prev, slideOutP);
            }
            else {
                $(prev).removeClass();
                animateCSS(prev, slideInP);
            }
            i -= 1;
        }
    });
});
/*
    Different animation classes for slide in
    animate__backInDown
    animate__backInLeft
    animate__backInRight
    animate__backInUp
    animate__bounceIn
    animate__bounceInDown
    animate__bounceInLeft
    animate__bounceInRight
    animate__bounceInUp
    animate__fadeIn
    animate__fadeInDown
    animate__fadeInDownBig
    animate__fadeInLeft
    animate__fadeInLeftBig
    animate__fadeInRight
    animate__fadeInRightBig
    animate__fadeInUp
    animate__fadeInUpBig
    animate__fadeInTopLeft
    animate__fadeInTopRight
    animate__fadeInBottomLeft
    animate__fadeInBottomRight
    animate__flip
    animate__flipInX
    animate__flipInY
    animate__lightSpeedInRight
    animate__lightSpeedInLeft
    animate__jackInTheBox
    animate__rollIn
    animate__zoomIn
    animate__zoomInDown
    animate__zoomInLeft
    animate__zoomInRight
    animate__zoomInUp
    animate__slideInDown
    animate__slideInLeft
    animate__slideInRight
    animate__slideInUp
*/
/*
Different animation classes for slide Out
    animate__backOutDown
    animate__backOutLeft
    animate__backOutRight
    animate__backOutUp
    animate__bounceOut
    animate__bounceOutDown
    animate__bounceOutLeft
    animate__bounceOutRight
    animate__bounceOutUp
    animate__fadeOut
    animate__fadeOutDownBig
    animate__fadeOutDown
    animate__fadeOutLeft
    animate__fadeOutLeftBig
    animate__fadeOutRight
    animate__fadeOutRightBig
    animate__fadeOutUp
    animate__fadeOutUpBig
    animate__fadeOutTopLeft
    animate__fadeOutTopRight
    animate__fadeOutBottomLeft
    animate__fadeOutBottomRight
    animate__flipOutX
    animate__flipOutY
    animate__lightSpeedOutRight
    animate__lightSpeedOutLeft
    animate__rotateOut
    animate__rotateOutDownLeft
    animate__rotateOutDownRight
    animate__rotateOutUpLeft
    animate__rotateOutUpRight
    animate__hinge
    animate__rollOut
    animate__zoomOut
    animate__zoomOutDown
    animate__zoomOutLeft
    animate__zoomOutRight
    animate__zoomOutUp
    animate__slideOutDown
    animate__slideOutLeft
    animate__slideOutRight
    animate__slideOutUp
*/