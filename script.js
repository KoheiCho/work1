$(function(){
    $('#menuButton').click(function(){
        $(this).toggleClass('active');
        $('.drawer-background').toggleClass('active');
        $('.drawer-content').toggleClass('active');
    });

    jQuery('a[href^="#"]').click(function() {
        // .headerクラスがついた要素の高さを取得
        let header = jQuery(".header").innerHeight(); 
        let speed = 300;
        let id = jQuery(this).attr("href");
        let target = jQuery("#" == id ? "html" : id);
        // トップからの距離からヘッダー分の高さを引く
        let position = jQuery(target).offset().top - header;
        // その分だけ移動すればヘッダーと被りません
        jQuery("html, body").animate(
          {
            scrollTop: position
          },
          speed
        );
        return false;
      });

      jQuery(window).on("scroll", function() {
        // トップから100px以上スクロールしたら
        if (100 < jQuery(this).scrollTop()) {
          // is-showクラスをつける
          jQuery('.totop').addClass( 'is-show' );
        } else {
          // 100pxを下回ったらis-showクラスを削除
          jQuery('.totop').removeClass( 'is-show' );
        }
      });

      jQuery('.header__nav ul li a').click(function() {
        jQuery('.header__nav ul li a').removeClass( 'is-active' );
        jQuery(this).addClass( 'is-active' );
        return false;
      });
      
      jQuery('.tab__nav ul li span').click(function(e) {
        e.preventDefault();
        let target = jQuery(this).data("target");

        jQuery('.tab__nav ul li span').removeClass('is-active');
        jQuery(this).addClass('is-active');

        jQuery('.tab-item').removeClass('is-active');
        jQuery(target).addClass('is-active');

        return false;
    });

    jQuery('.accordion__above').click(function () {
      jQuery(this).next().slideToggle();
      jQuery(this).find('#accordion__icon').toggleClass( 'is-open' );
    });

    $('.js-modal-open').click(function(){
      $('.for-modal').toggleClass('is-open');
    });

    $('.js-modal-close').click(function(){
      $('.for-modal').removeClass('is-open');
    });

    // $('.js-modal-close').click(function(e){
    //   e.preventDefault();

    //   let target = jQuery(this).data("target");
    //   $('.' + target).removeClass( 'is-open' );

    //   return false;
    // });

  });


