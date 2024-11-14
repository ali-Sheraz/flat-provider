import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';

declare const $: any;
@Component({
  selector: 'app-venues',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})

export class VenuesComponent implements OnInit {
  public rows = [];
  public srch = [];

  public addLT: any = {};
  public uptLT: any = {};
  searchT: any = [];


  public numberOfHours = [];

  public vanuList = [];

  deleteID!: string;
  delete_results="Deleted";

  addVenueValidation: Boolean = false;
  showErrorMsg: Boolean = false;
  showSuccessMsg: Boolean = false;
  totalList: any;
  public userLevel: any;


  public venueadded!: string;
  scan: Boolean = false;
  public scanResults!: string;


  unsortedrows = [];


  bookings_title='Title';
  bookings_location='Location';
  bookings_booking_start_time='Booking Start Time';
  bookings_booking_end_time='Booking End Time';
  bookings_minimum_booking_time_hours='Minimum Booking Time (Hours)';
  bookings_maximum_booking_time_hours='Maximum Booking Time (Hours)';
  bookings_add_venue='Add Venue';
  bookings_edit_venue='Edit Venue';
  bookings_update_venue='Update Venue';

  head_title = 'Venues';
  generals_search = 'Search';
  generals_clear_search = 'Clear Search';
  generals_view_details = 'View Details';
  generals_uploaded_images = 'Uploaded Images'
  generals_edit = 'Edit'
  generals_delete = 'Delete';
  generals_uploaded_files = 'Uploaded Files';
  generals_actions = 'Actions';
  public row = [
    {
      id: '1',
      title: 'Downtown',
      location: '1st Avenue',
      booking_start_time: '5:00',
      booking_end_time: '9:00',
      minimum_booking_time: '2:00',
      maximum_booking_time: '4:00',

    },
    {
      id: '2',
      title: 'Uptown',
      location: '2nd Avenue',
      booking_start_time: '5:00',
      booking_end_time: '9:00',
      minimum_booking_time: '2:00',
      maximum_booking_time: '4:00',
    },
  ]

  initDropdowns() {
    $('.dropdown-toggle').on('click', (e: any) => {
      e.preventDefault();
      const $el = $(e.currentTarget).next('.dropdown-menu'); // Use `e.currentTarget` instead of `this`
      $('.dropdown-menu').not($el).slideUp();
      $el.slideToggle();
    });
  }
  ngOnInit() {
    // Initialization logic here
  }


  addReset() {

    $('#add_modal').modal('show');

  }

  onEdit(updateItem:any) {
    this.uptLT = updateItem;
    $('#Edit_modal').modal('show');
  }



  onDelete(c: { id: string; }) {
    console.log(c.id);
    this.deleteID=c.id;
    $('#delete').modal('show');
  }

  deleteConfirmation() {
    $('#delete').modal('hide');
    
      $('#delete_result').modal('show');
    
  }

  deleteResult(){
    $('#delete_result').modal('hide');

  }
}
