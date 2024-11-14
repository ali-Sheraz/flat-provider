import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../../../header/header.component';
import { SidebarComponent } from '../../../sidebar/sidebar.component';

declare const $: any;
type AOA = any[][];


@Component({
  selector: 'app-element',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  ///////////total  list/////////
  totalList: any;

  ////////////Alert variable////////
  scan: Boolean = false;
  public scanResults: any;
  public editFlag: boolean = false;
  showErrorMsg: Boolean = false;
  showSuccessMsg: Boolean = false;
  public typeOfUnitAdd: any;
  typeofunitload: Boolean = false;
  locationload: Boolean = false;
  elementload: Boolean = false;
  addElementValidation: Boolean = false;
  ////////////languages/////////
  led_cause_property_developer = 'Client';
  led_cause_type_of_unit = 'Type Of Unit';
  led_cause_location = 'Location';
  led_cause_element = 'Element';
  led_cause_defect = 'Defect';
  led_cause_competency = 'Competency';
  led_cause_days_to_execute = 'Days To Execute';
  led_cause_priority = 'Priority';
  led_cause_next_action = 'Next Action';
  led_cause_cause = 'Cause';
  public languages = [];
  //////////search variable///////\
  searchT: any = [];
  precinctsList = [];
  unsortedrows = [];
  public rows = [];
  public addLT: any = {};
  public uptLT: any = {};
  public propertyDevelopers = [];
  public AllPdList = [];
  ///////////Edit variables/////////
  public updateItem: any = {};
  public edittou: any;
  /////////////delete/////
  delete_results="Deleted";
  ///////////file variables///////
  uploadFile = false;
  Results = '';
  excelData: AOA = [[1, 2], [3, 4]];
  RecordAdded = '';
  ///////////aPi////////////
  data = [
    {
      property_developer: 'ABC Properties',
      type_of_unit: 'Apartment',
      location: 'Downtown',
      element: 'Building A'
    },
    {
      property_developer: 'XYZ Developers',
      type_of_unit: 'Villa',
      location: 'Suburbs',
      element: 'Phase 1'
    },
    {
      property_developer: 'LMN Realty',
      type_of_unit: 'Condo',
      location: 'Uptown',
      element: 'Tower 3'
    },
    {
      property_developer: '123 Homes',
      type_of_unit: 'Townhouse',
      location: 'Countryside',
      element: 'Block C'
    }
  ];
  
   
 ngOnInit() {
  this.initDropdowns();
 
}
initDropdowns() {
  $('.dropdown-toggle').on('click', (e: any) => {
    e.preventDefault();
    const $el = $(e.currentTarget).next('.dropdown-menu'); // Use `e.currentTarget` instead of `this`
    $('.dropdown-menu').not($el).slideUp();
    $el.slideToggle();
  });
}
 addReset() {
   let randomnumber = Math.floor(Math.random() * 500);
   this.addLT = { 'id': randomnumber };
   this.addElementValidation=false;
   $('#add_element').modal('show');
 }
  AllPd = [
  'ABC Developers',
  'XYZ Construction',
  'LMN Builders',
  'PQR Realty',
  'DEF Homes',
  'GHI Properties',
  'JKL Group',
  'MNO Construction',
  // Add more property developers as needed
];
typeOfUnit = [
  { type_of_unit: 'Residential' },
  { type_of_unit: 'Commercial' },
  { type_of_unit: 'Mixed Use' },
  { type_of_unit: 'Industrial' },
  // Add more types of units as needed
];
locations = [
  { location: 'Downtown' },
  { location: 'Suburbs' },
  { location: 'Uptown' },
  { location: 'Countryside' }
];
 //////////////Edit function//////////////
 onEdit(item:any) {
  console.log("Elements:",item)
   this.uptLT=item;
   $('#Edit_modal').modal('show');
 }
 onDelete() {
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