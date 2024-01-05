$(document).ready(function () {
    $('.aside-hider').on('click', function () {
        $('.aside-hider i').toggleClass('aside-aerrow');
        $('.aside-hider').toggleClass('aside-move');
        $('header, main').toggleClass('header-main-large');
        $('aside').toggleClass('aside-small');
        $('.aside-logo .logo-1 img').toggleClass('hide');
        $('.aside-logo .logo-2 img').toggleClass('show');
        $('nav ul li .sp-aerrow').toggleClass('hidden');
        $('nav ul li .sp-hover-aerrow').toggleClass('hidden');
        $('.dashboards .db').toggleClass('hide');
        $('.pages, .apps, .layouts, .help').find('.default1').toggleClass('hidden');
        $('.pg, .ap, .l-outs, .help-item').find('.sp-right').toggleClass('hidden');
        // $('.card-6').toggleClass('h-600');


        if ($('.aside-hider').hasClass('ok')) {
            $('.aside-hider').removeClass('ok')
        } else {
            $('.aside-hider').addClass('ok')
        }
    });

    // ASIDE-HOVER
    $('aside').hover(function () {
        if ($('.aside-hider').hasClass('ok')) {
            $('.aside-hider i').toggleClass('aside-aerrow');
            $('.aside-hider').toggleClass('aside-move');
            $('header, main').toggleClass('header-main-large');
            $('aside').toggleClass('aside-small');
            $('.aside-logo .logo-1 img').toggleClass('hide');
            $('.aside-logo .logo-2 img').toggleClass('show');
            $('nav ul li .sp-aerrow').toggleClass('hide');
            $('nav ul li .sp-hover-aerrow').toggleClass('hide');
            $('.pages, .apps, .layouts, .help').find('.default1').toggleClass('visible');
            $('.pg, .ap, .l-outs, .help-item').find('.sp-right').toggleClass('visible');
        }
    });

    // MAIN-MENU LI HOVER
    $('nav .main-menu .default1').on('click', function () {
        $(this).find('.sp-right i').toggleClass('down-aerrow');
        $(this).nextAll('.main-items').slideToggle(500);
    });

    // SUB-MENU LI HOVER
    $('nav .main-menu>li').on('click', function () {
        $(this).find('.sp-aerrow i').toggleClass('down-aerrow');
        $(this).find('.sub-menu li').slideToggle(500);
    });

    // HEADER-HOVER
    $('.header-menu li').hover(function () {
        $(this).find('.hsub').fadeToggle(200);
    });
    $('.header-icons li').hover(function () {
        $(this).find('.theme-option').fadeToggle(200);
    });
    $('.header-right .theme .theme-option .light').on('click',function () {
        $(':root').css("--primary","#242424");
        $(':root').css("--blue","#009ef7");
        $(':root').css("--secondary","#eeeeee");
        $(':root').css("--offwhite","#f9f9f9");
        // $(':root').css("--dark-blue","#181c32");
        // $('.card-5 .images .dark').addClass('hide');
        // $('.card-5 .images .light').addClass('show');
    });
    $('.header-right .theme .theme-option .dark').on('click',function () {
        $(':root').css("--primary","var(--white)");
        $(':root').css("--secondary","var(--dark-blue)");
        $(':root').css("--offwhite","var(--gblu)");
        // $(':root').css("--blue","var(--gray)");
        // $('.card-5 .images .dark').addClass('show');
        // $('.card-5 .images .light').addClass('hide');
    });
});
