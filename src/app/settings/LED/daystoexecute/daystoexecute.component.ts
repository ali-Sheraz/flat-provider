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
  selector: 'app-daystoexecute',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './daystoexecute.component.html',
  styleUrls: ['./daystoexecute.component.css']
})
export class DaystoexecuteComponent implements OnInit {
 ///////////total  list/////////
 totalList: any;

 ////////////Alert variable////////
 scan: Boolean = false;
 public scanResults!: string;
 public editFlag: boolean = false;
 showErrorMsg: Boolean = false;
 showSuccessMsg: Boolean = false;
 public typeOfUnitAdd!: string;
 addDaysToExecuteValidation: Boolean = false;
 typeofunitload: Boolean = false;
 locationload: Boolean = false;
 elementload: Boolean = false;
 defectLoad: Boolean = false;
 competencyLoad: Boolean = false;

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
 public editlocation: any;
 public editElement: any;
 public editDefect: any;


 /////////////delete/////
 delete_results="Deleted";
 ///////////file variables///////
 uploadFile = false;
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
 ///////////Add functions////////
 addReset() {
   let randomnumber = Math.floor(Math.random() * 500);
   this.addLT = { 'id': randomnumber };
   $('#add_days_to_execute').modal('show');
 
 }
 ///////////EDit functions
 onEdit(item:any) {
 
   this.uptLT=item
  
   $('#Edit_modal').modal('show');
 }



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
  data = [
    { property_developer: 'Developer A', type_of_unit: 'Unit 1', location: 'Location A', element: 'Element A', defect: 'Defect A', competency: 'Competency A', days_to_execute: 5 },
    { property_developer: 'Developer B', type_of_unit: 'Unit 2', location: 'Location B', element: 'Element B', defect: 'Defect B', competency: 'Competency B', days_to_execute: 10 }
    // Add more data as needed
  ];
 ///////////languages/////////

}
