import $ from 'jquery';
import { BaseComponent } from '../Base/BaseComponent';

export class HeaderComponent extends BaseComponent {

    constructor() {
        super();
    }

    _events() {
        $(document).on('click', '.brgr-menu', (e)=>{
            toggleMobileMenu();
        });

        $(document).on('click', '.header-login.mobile-show', (e)=>{
            toggleMobileMenu();
        });

        $(document).on('click', '.menu a', (e)=>{
          if (window.matchMedia("(max-width: 1120px)").matches) {
            toggleMobileMenu();
          }
        });

        function toggleMobileMenu() {
            $('#header').find('.menu').slideToggle();
            $('.brgr-menu').toggleClass('active');
            $('body').toggleClass('hidden');
        }

        $(window).on('resize', (e)=> {
            if (window.matchMedia("(min-width: 1121px)").matches) {
                $('.menu').removeAttr('style');
                $('.brgr-menu').removeClass('active');
                $('body').removeClass('hidden');
            }
        });

        $(window).on('scroll', (e)=> {
            let windowTop = $(window)[0].pageYOffset,
                $heading = $('#heading'),
                $header = $('#header'),
                headingBottom = $heading.offset().top + $heading.height(),
                scrolled = false;

            if( windowTop >= headingBottom ) {
                scrolled = true;
            }
            $header.toggleClass('scrolled', scrolled)
        });

        $(".menu, .logo").on("click", "a", (e)=> {
            if( $(e.currentTarget).attr('href').substring(0,1) === '#') {
                e.preventDefault();
                this.navigateToBlock( $(e.currentTarget).attr('href') );
            }
        });

    }

    navigateToBlock(selector, time) {
        let top = $(selector).offset().top;
        $('body,html').animate({scrollTop: top}, time || 800);
    }

}
