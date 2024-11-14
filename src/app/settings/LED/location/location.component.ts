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
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  ///////////total  list/////////
  totalList: any;
  
  ////////////Alert variable////////

  public scanResults!: string;


  public typeOfUnitAdd!: string;
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

  ///////////Edit variables/////////
  public updateItem: any = {};
  public edittou: any;
  public AllPdList = [];
  /////////////delete/////
  delete_results="deleted";
  ///////////file variables///////
  Results = '';
  excelData: AOA = [[1, 2], [3, 4]];
  RecordAdded = '';
  ///////////aPi////////////


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
    $('#add_location').modal('show');
  }
  ////////////Edit functions/////////
  onEdit(item:any) {
    this.uptLT = item;
    $('#Edit_modal').modal('show');
  }

  
   data = [
    { property_developer: 'ABC Developers', type_of_unit: 'Residential', location: 'New York' },
    { property_developer: 'XYZ Construction', type_of_unit: 'Commercial', location: 'Los Angeles' },
    { property_developer: 'LMN Builders', type_of_unit: 'Mixed Use', location: 'Chicago' },
    { property_developer: 'PQR Realty', type_of_unit: 'Industrial', location: 'Houston' },
    { property_developer: 'DEF Homes', type_of_unit: 'Residential', location: 'Phoenix' },
    { property_developer: 'GHI Properties', type_of_unit: 'Commercial', location: 'Philadelphia' },
    { property_developer: 'JKL Group', type_of_unit: 'Mixed Use', location: 'San Antonio' },
    { property_developer: 'MNO Construction', type_of_unit: 'Industrial', location: 'San Diego' },
    // Add more static data as needed
  ];
  public AllPd = [
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
  public typeOfUnit = [
    { type_of_unit: 'Residential' },
    { type_of_unit: 'Commercial' },
    { type_of_unit: 'Mixed Use' },
    { type_of_unit: 'Industrial' },
    // Add more types of units as needed
  ];

  ///////////////delete functions///////////

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
