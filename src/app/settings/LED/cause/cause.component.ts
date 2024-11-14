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
  selector: 'app-cause',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.css']
})
export class CauseComponent implements OnInit {
 ///////////total list///////
 totalList: any;
 public typeOfUnitAdd: any;
 ////////////Alert variables/////
 scan: Boolean = false;
 public scanResults: any;
 addCauseValidation: Boolean = false;
 showErrorMsg: Boolean = false;
 showSuccessMsg: Boolean = false;
 typeofunitload: Boolean = false;
 locationload: Boolean = false;
 elementload: Boolean = false;
 defectLoad: Boolean = false;
 competencyLoad: Boolean = false;
 daysToExecuteLoad: Boolean = false;
 priorityLoad: Boolean = false;
 nextActionLoad: Boolean = false;
 public editFlag: boolean = false;
 ////////////search variable/////
 searchT: any = [];
 public rows = [];
 public addLT: any = {};
 public uptLT: any = {};
 public propertyDevelopers = [];
 unsortedrows = [];
 //////////languages///////
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
 //////////chnge variabels/////
 public editlocation: any;
 public edittou: any;
 precinctsList = [];
 public updateItem: any = {};
 public editElement: any;
 public editDefect: any;
 public editCompetency: any;
 public editDaysToExecute: any;
 public editpriority: any;
public AllPdList = [];
 
 uploadFile = false;
 Results = '';
 excelData: AOA = [[1, 2], [3, 4]];
 RecordAdded = '';
 /////////////delete/////////
 delete_results="Deleted";
 ////////////API/////////
 

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
   this.addCauseValidation = false;
   let randomnumber = Math.floor(Math.random() * 500);
   this.addLT = { 'id': randomnumber };
   $('#Add_cause').modal('show');
 }
 /////////on edit//////////
 onEdit(item: { type_of_unit: any; location: any; element: any; defect: any; competency: any; days_to_execute: any; priority: any; }) {
   this.addCauseValidation = false;
   this.editFlag = true;
   this.uptLT = item;
   this.updateItem = this.uptLT;
   this.edittou = item.type_of_unit;
   this.editlocation = item.location;
   this.editElement = item.element;
   this.editDefect = item.defect;
   this.editCompetency = item.competency;
   this.editDaysToExecute = item.days_to_execute;
   this.editpriority = item.priority;
   $('#Edit_modal').modal('show');
 }

   ///////////////deletion///////////

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
  elements = [
    { element: 'Element 1' },
    { element: 'Element 2' },
    { element: 'Element 3' },
    { element: 'Element 4' },
    { element: 'Element 5' }
  ];
  
  defects = [
    { defect: 'Defect A' },
    { defect: 'Defect B' },
    { defect: 'Defect C' },
    { defect: 'Defect D' }
    // Add more defects as needed
  ];
  competencys = [
    { competency: 'Technical Skills' },
    { competency: 'Project Management' },
    { competency: 'Communication' },
    { competency: 'Teamwork' },
    { competency: 'Problem Solving' }
  ];
  days_to_executes = [
    { days_to_execute: 1 },
    { days_to_execute: 2 },
    { days_to_execute: 3 },
    { days_to_execute: 5 },
    { days_to_execute: 7 },
    { days_to_execute: 10 },
    { days_to_execute: 15 },
    { days_to_execute: 30 }
  ];
  
  prioritys = [
    { priority: 'High' },
    { priority: 'Medium' },
    { priority: 'Low' }
  ];
  next_actions = [
    { next_action: 'Inspection' },
    { next_action: 'Repair' },
    { next_action: 'Replacement' },
    { next_action: 'Review' },
    { next_action: 'Follow-up' },
    { next_action: 'Approval' },
    // Add more options as needed
  ];
  data = [
    {
      property_developer: 'ABC Developers',
      type_of_unit: 'Apartment',
      location: 'New York',
      element: 'Foundation',
      defect: 'Cracks',
      competency: 'High',
      days_to_execute: 10,
      priority: 'High',
      next_action: 'Inspection',
      cause: 'Soil Erosion',
    },
    {
      property_developer: 'XYZ Constructions',
      type_of_unit: 'Villa',
      location: 'Los Angeles',
      element: 'Roof',
      defect: 'Leakage',
      competency: 'Medium',
      days_to_execute: 5,
      priority: 'Medium',
      next_action: 'Repair',
      cause: 'Poor Material',
    },
    // Add more rows as needed
  ];
  
}
