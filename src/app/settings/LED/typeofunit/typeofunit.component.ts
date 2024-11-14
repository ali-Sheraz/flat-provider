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
  selector: 'app-typeofunit',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './typeofunit.component.html',
  styleUrls: ['./typeofunit.component.css']
})
export class TypeofunitComponent implements OnInit {
  /////////total list///
  totalList: any;

  /////////////alert variable///////////
  scan: boolean = false;
  scanResults = '';
  addTypeOfUnitValidation: Boolean = false;
  showErrorMsg: Boolean = false;
  showSuccessMsg: Boolean = false;
  public typeOfUnitAdd: any;
  //////////search variable///////
  searchT: any = [];
  public addLT: any = {};
  public uptLT: any = {};
  precinctsList = [];
  public PropertyDevelopers = [];
  excelData: AOA = [[1, 2], [3, 4]];
  /////////////language///////

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
  /////////////delete/////////
  delete_results="Deleted";
  /////////files variables///
  uploadFile = false;
  Results = '';
  RecordAdded = '';
  public AllPdList = [];
  ////////////API?/////////
 
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


  
  ///////////Add unit///////
  addReset() {
    let randomnumber = Math.floor(Math.random() * 500);
    this.addLT = { 'id': randomnumber };
    $('#add_type_of_unit').modal('show');
  }

  ///////////Edit//////////

  onEdit(item:any) {
    this.uptLT = item;
    $('#Edit_modal').modal('show');
  }

  rows = [
    { property_developer: 'ABC Developers', type_of_unit: 'Residential' },
    { property_developer: 'XYZ Construction', type_of_unit: 'Commercial' },
    { property_developer: 'LMN Builders', type_of_unit: 'Mixed Use' },
    { property_developer: 'PQR Realty', type_of_unit: 'Industrial' },
    { property_developer: 'DEF Homes', type_of_unit: 'Residential' },
    { property_developer: 'GHI Properties', type_of_unit: 'Commercial' },
    { property_developer: 'JKL Group', type_of_unit: 'Mixed Use' },
    { property_developer: 'MNO Construction', type_of_unit: 'Industrial' },
    // Add more static data as needed
  ];
  
  ///////////////deletion///////////


  

}
