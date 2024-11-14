import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { ISlimScrollOptions, NgSlimScrollModule, SlimScrollOptions } from 'ngx-slimscroll';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgSlimScrollModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  opts1!: SlimScrollOptions;
  menuSidebar = false;
  public url: string = 'default_value';
  public userLevel: string = 'Admin';
  public userNickname: string = 'Sub_level';
  public profile_pic: string = 'https://workordersfiles920.s3.amazonaws.com/General/UsersProfile/user.png';

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url.split('/')[1];
        if (this.url === 'inbox' || this.url === 'chats' || this.url === 'settings' || this.url === 'calls') {
          if ($('body').hasClass('mini-sidebar')) {
            $('body').removeClass('mini-sidebar');
            $('.subdrop + ul').slideDown();
          }
        }
      }
    });
  }

  ngAfterViewInit() {
    this.updateHeights();
    
    $(window).resize(this.updateHeights.bind(this));

    // Initialize dropdown functionality
    this.initDropdowns();

    // Initialize notifications functionality
    this.initNotifications();
  }

  ngOnInit() {
    this.opts1 = {
      barBackground: '#878787',
      gridBackground: 'transparent',
      barOpacity: '0.6',
      barBorderRadius: '6',
      barWidth: '7',
      gridWidth: '0',
      alwaysVisible: false,
      merge: (obj?: ISlimScrollOptions): SlimScrollOptions => Object.assign({}, this.opts1, obj)
    };

    this.updateHeights();

    $(document).on('mouseover', (e: any) => {
      e.stopPropagation();
      if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
        const targ = $(e.target).closest('.sidebar').length;
        if (targ) {
          $('body').addClass('expand-menu');
          $('.subdrop + ul').slideDown();
        } else {
          $('body').removeClass('expand-menu');
          $('.subdrop + ul').slideUp();
        }
      }
    });

    this.url = 'inbox'; // Example static URL
  }

  updateHeights() {
    const h = $(window).height() - 124;
    $('.msg-list-scroll').height(h);
    $('.msg-sidebar .slimscroll-wrapper').height(h);
  }

  initDropdowns() {
    $('.dropdown-toggle').on('click', (e: any) => {
      e.preventDefault();
      const $el = $(e.currentTarget).next('.dropdown-menu'); // Use `e.currentTarget` instead of `this`
      $('.dropdown-menu').not($el).slideUp();
      $el.slideToggle();
    });
  }

  initNotifications() {
    console.log('Initializing notifications...');
    $('.notification-box').on('click', (e: any) => {
      e.preventDefault();
      console.log('Notification box clicked');
      const $msgSidebar = $('.msg-sidebar'); // Find the msg-sidebar directly
      console.log('Toggling msg-sidebar visibility');
      $msgSidebar.slideToggle();
    });

    $('.msg-sidebar .list-box li a').on('click', (e: any) => {
      e.preventDefault();
      console.log('Notification item clicked:', $(e.currentTarget).text());
    });
  }

  logOut() {
    console.log('Logout done');
    this.cookieService.deleteAll();
    this.router.navigate(['pages/login']);
  }
}
