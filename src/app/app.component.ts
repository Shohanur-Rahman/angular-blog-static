import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // 1. Preloader
    $(window).on('load', function () {
      if ($('.preloader-wrapper').length > 0) {
        $('.preloader-wrapper').fadeOut('slow');
      }
    });

    // 2. Sticky header
    /*$('#sticky-top').sticky({
      topSpacing: 0,
      bottomSpacing: 100,
    });*/
    $('#sticky-top').on('sticky-start', function () {
      $(this).addClass('sticky-header');
      $('.sticky-logo').addClass('sticky-logo-active');
      $('.sticky-search').addClass('sticky-search-active');
    });
    $('#sticky-top').on('sticky-end', function () {
      $('.kavya-navbar').removeClass('sticky-header');
      $('.sticky-logo').removeClass('sticky-logo-active');
      $('.sticky-search').removeClass('sticky-search-active');
    });

    // 3. Dropdown arrow
    if (document.documentElement.clientWidth > 991) {
      $('.nav-item')
        .on('mouseenter', function () {
          $(this).find('.arrow-icon').addClass('active');
        })
        .on('mouseleave', function () {
          $(this).find('.arrow-icon').removeClass('active');
        });
    }
    if (document.documentElement.clientWidth < 992) {
      $('#nav-menu-toggle .nav-item').on('click', function () {
        $(this).find('.arrow-icon').toggleClass('active');
        $(this).find('.drop-menu').slideToggle();
      });
    }

    // 4. Scroll to top
    var scrollTop = $('.scroll-to-top');

    $(window).on('scroll', function () {
      var topPos = $(this).scrollTop();
      if (topPos > 150) {
        $(scrollTop).css('opacity', '1');
      } else {
        $(scrollTop).css('opacity', '0');
      }
    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).on('click', function () {
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });

    // 5. open and close search
    $('.search-icon').on('click', function () {
      $('#search-overlay').addClass('search-show');
    });
    $('.closebtn').on('click', function () {
      $('#search-overlay').removeClass('search-show');
    });

    // 6. open and close sidebar
    $('.sidebar-btn').on('click', function () {
      $('.sticky-sidebar').addClass('sidebar-show');
      $('.body-overlay').addClass('body-overlay-active');
      $('.scroll-to-top').css('visibility', 'hidden');
    });

    $('.close-sidebar').on('click', function () {
      $('.sticky-sidebar').removeClass('sidebar-show');
      $('.body-overlay').removeClass('body-overlay-active');
      $('.scroll-to-top').css('visibility', 'visible');
    });

    // 7. Responsive Navbar
    let mainNav = document.getElementById('nav-menu-toggle');
    let navBarToggle = document.getElementById('navbar-toggle');
    let hideToggle = document.getElementById('hide-toggle');
    navBarToggle.addEventListener('click', function () {
      $('#nav-menu-toggle').slideToggle();
    });


  }
  title = 'blog';
}
