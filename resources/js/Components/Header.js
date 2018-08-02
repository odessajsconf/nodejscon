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


    }

}
