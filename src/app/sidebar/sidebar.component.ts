import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';
import { ISlimScrollOptions, NgSlimScrollModule, SlimScrollOptions } from 'ngx-slimscroll';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule,NgSlimScrollModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  opts!: SlimScrollOptions 
  public url!: string;
  public url2!: string;
  homeView = true;
  chatView = false;
  mailView = false;
  messageView = false;
  composeView = false;
  settingsView = false;
  callView = false;
  taskView = false;
  userLevel!: string;
  language!: string;
  usersCompleteList:boolean=false;
  usersComplete:boolean=false;
  
  payments = "Payments";
  pp = "Precincts/Projects";
  tu = "Template Uploads";
  lresidents = "All Lead Residents";
  epayments = "eGHL Dashboard";
  properties = "Properties";
  abookings = "Bookings";
  apayments = "All Invoices";
  sservices = "Sub Category";
  work_orders = "Work Orders";
  spp = "Sub Precincts/Projects/Condos";
  rtu = "Residents";
  ptu = "Properties";
  vbookings = "Venues";
  cservices = "Category";
  adwork_orders = "Add New Work Order";
  cause = "Cause";
  contractors = "Contractors";
  element = "Element";
  residents = "Residents";
  location_re = "Location";
  property_developers = "Clients";
  competency = "Competency";
  alanguages = "All Languages";
  settings = "Settings";
  services = "Services";
  dashboard = "Reports & Stats";
  led = "LED";
  priority = "Priority";
  pwork_orders = "My Pending Work Orders";
  aresidents = "All Residents";
  bookings = "Bookings";
  aservices = "Services";
  awork_orders = "All Work Orders";
  bth = "Back To Home";
  na = "Next Action";
  dte = "Days To Execute";
  defect = "Defect"
  module_permission = "Permissions";
  tou = "Type Of Unit";
  users = "Users";
  languages_title = "Languages";
  announcements = "Announcements";


  permissions_userlevel: any;


  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        $('.modal').modal('hide');
         console.log(event.url);
      }

      if (event instanceof NavigationEnd) {
        this.url = event.url.split('/')[1];
        this.url2 = event.url.split('/')[2];

        const height = $(window).height();
        $('.page-wrapper').css('min-height', height);

        $('.main-wrapper').removeClass('slide-nav-toggle');
        $('#chat_sidebar').removeClass('opened');
        $('.sidebar-overlay').removeClass('opened');
        $('.task-overlay').removeClass('opened');

        if (this.url == 'settings') {
          this.homeView = false;
          this.chatView = false;
          this.mailView = false;
          this.settingsView = true;
          this.messageView = false;
          this.composeView = false;
          this.callView = false;
          this.taskView = false;
        }
      }

      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }

  ngOnInit() {
    this.language = 'English';

   this.opts = {
      barBackground: '#ccc',
      gridBackground: 'transparent',
      barOpacity: '0.4',
      barBorderRadius: '6',
      barWidth: '6',
      gridWidth: '0',
      alwaysVisible: false,
      merge: (obj?: ISlimScrollOptions): SlimScrollOptions => Object.assign({}, this.opts, obj)
    };
    const h = $(window).height() - 60;
    $('.slimscroll-wrapper').height(h);

    $(window).resize(function() {
      const h = $(window).height() - 60;
      $('.slimscroll-wrapper').height(h);
    });
  }
  toggleSubmenu(event: MouseEvent) {
    event.preventDefault();
    const target = $(event.currentTarget as HTMLElement);
    target.next('ul').slideToggle(); // Toggle visibility of the submenu
    target.toggleClass('subdrop');
  }
 
}
