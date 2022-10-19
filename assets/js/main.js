$(function() {
    // гамбургер меню
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let tabletMobile = false;
    let patternDost = $('.pattern_dots');
    let headerContact = $('.header_right-wrapper');
    let footerMail = $('.footer_mail');
    let footerSocial = $('.bottom_socials');

    if ($(window).width() < 992) {
        mobile = true;
        $('header .menu').append(headerContact);
    }

    if ($(window).width() < 767) {
        tabletMobile = true;
        $('.item_right').each(function() {
            let itemPriceMob = $(this).closest('.item').find(patternDost)
            $(this).prepend(itemPriceMob)
        });
        $('.footer_left-social').append(footerSocial);
        $('.bottom .container').prepend(footerMail);
    }

    $(window).on('resize', function() {
        if ($(window).width() < 992 && !mobile) {
            mobile = true;
            $('header .menu').append(headerContact);
        }

        if ($(window).width() >= 992 && mobile) {
            mobile = false;
            $('.header_right').prepend(headerContact);
            $(this, 'header .menu').removeClass('active');
        }

        if ($(window).width() < 751 && !tabletMobile) {
            tabletMobile = true;
            $('.item_right').each(function() {
                let itemPriceMob = $(this).closest('.item').find(patternDost)
                $(this).prepend(itemPriceMob)
            });
            $('.footer_left-social').append(footerSocial);
            $('.bottom .container').prepend(footerMail);
        }

        if ($(window).width() >= 751 && tabletMobile) {
            tabletMobile = false;
            $('.item').each(function() {
                let itemPriceMob = $(this).closest('.item').find(patternDost)
                $(this).prepend(itemPriceMob)
            });
            $('.bottom .container').prepend(footerSocial);
            $('.footer_left-social').append(footerMail);
        }
    });

    $('.select .visual_part').on('click', function() {
        $('.select .list').slideToggle();
    });

    $('.select .list a').on('click', function(e) {
        e.preventDefault();
        a = $(this).html();
        $(this).closest('.select').find('.visual_part span').html(a)
        $(this).parents('.list').slideToggle();
    });


    $('.banner_slider').slick({
        arrows: false,
        dots: true,
        fade: true
    });
});