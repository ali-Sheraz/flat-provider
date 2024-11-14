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
  selector: 'app-nextaction',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './nextaction.component.html',
  styleUrls: ['./nextaction.component.css']
})
export class NextactionComponent implements OnInit {
///////////total  list/////////
totalList: any;

////////////Alert variable////////
scan: Boolean = false;
public scanResults!: string;
public editFlag:boolean=false;


addnextActionValidation: Boolean = false;
showErrorMsg: Boolean = false;
showSuccessMsg: Boolean = false;
public typeOfUnitAdd!: string;

typeofunitload: Boolean = false;
locationload: Boolean = false;
elementload: Boolean = false;
defectLoad: Boolean = false;
competencyLoad: Boolean = false;
daysToExecuteLoad: Boolean = false;
priorityLoad: Boolean = false;
////////////languages/////////

led_cause_property_developer='Client';
led_cause_type_of_unit='Type Of Unit';
led_cause_location='Location';
led_cause_element='Element';
led_cause_defect='Defect';
led_cause_competency='Competency';
led_cause_days_to_execute='Days To Execute';
led_cause_priority='Priority';
led_cause_next_action='Next Action';
led_cause_cause='Cause';
public languages = [];
//////////search variable///////\
searchT: any = [];
precinctsList=[];
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
public editCompetency: any;
public editDaysToExecute: any;
/////////////delete/////
delete_results="Deleted";
///////////file variables///////
uploadFile = false;
Results = '';
excelData: AOA = [[1, 2], [3, 4]];
RecordAdded = '';
//////////////API////////////////////

  ///////////get functions/////////////

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

  ///////////ADD function////////

  addReset() {
    console.log("null5");

    this.addnextActionValidation=false;
    let randomnumber = Math.floor(Math.random() * 500);
    this.addLT = { 'id': randomnumber };
    $('#add_next_action').modal('show');
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
 
onEdit(item: { property_developer: any; type_of_unit: any; location: any; element: any; defect: any; competency: any; days_to_execute: any; }) {
  this.addnextActionValidation=false;
  this.editFlag=true;
  this.uptLT=item;
  this.edittou=item.type_of_unit;
  this.editlocation=item.location;
  this.editElement=item.element;
  this.editDefect=item.defect;
  this.editCompetency=item.competency;
  this.editDaysToExecute=item.days_to_execute;
  $('#Edit_modal').modal('show');
}
data = [
  {
    property_developer: 'ABC Developers',
    type_of_unit: 'Apartment',
    location: 'Downtown',
    element: 'Kitchen',
    defect: 'Leakage',
    competency: 'High',
    days_to_execute: 5,
    priority: 'High',
    next_action: 'Inspect'
  },
  {
    property_developer: 'XYZ Builders',
    type_of_unit: 'Villa',
    location: 'Suburb',
    element: 'Bathroom',
    defect: 'Cracks',
    competency: 'Medium',
    days_to_execute: 10,
    priority: 'Medium',
    next_action: 'Repair'
  }
  // Add more data as needed
];
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


}
