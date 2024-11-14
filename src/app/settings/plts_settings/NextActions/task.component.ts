import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../../../header/header.component';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
declare const $: any;
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  ////////total list//////////
  totalList: any;
  ///////////alert variables///////
  scan: boolean = false;
  public addMsg: any;
  showErrorMsg: Boolean = false;
  showSuccessMsg: Boolean = false;
  scanResults = '';
  editFlag: boolean = false;
  addTypeOfUnitValidation: Boolean = false;
  typeofunitload: Boolean = false;
  //////////////search variables//////////
  searchT: any = [];
  public addLT: any = {};
  public uptLT: any = {};
  public rows = [];
  public tabList = [];
  public AllPdList = [];
  precinctsList = [];
  public typeOfUnit = [];
  unsortedrows = [];
  ////////////deletion/////////
  delete_results="Deleted";
  generals_delete = "Delete";

 



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
  public data = [
    {
      property_developer: 'Client A',
      task: 'Review Document',
      font: '#FF5733', // Example color code
      Background: '#D5DBDB' // Example color code
    },
    {
      property_developer: 'Client B',
      task: 'Approve Budget',
      font: '#33FF57', // Example color code
      Background: '#D4E157' // Example color code
    },
    {
      property_developer: 'Client C',
      task: 'Schedule Meeting',
      font: '#3357FF', // Example color code
      Background: '#FFC107' // Example color code
    },
    {
      property_developer: 'Client D',
      task: 'Send Invoice',
      font: '#FF33A1', // Example color code
      Background: '#FFEB3B' // Example color code
    },
    {
      property_developer: 'Client E',
      task: 'Update Status',
      font: '#8E44AD', // Example color code
      Background: '#B2BABB' // Example color code
    }
  ];
  
  /////////////get functions////////////


  ///////////search record /////////


  addReset() {
    let randomnumber = Math.floor(Math.random() * 500);
    this.addLT = { 'id': randomnumber };
    $('#add_modal').modal('show');
  }

  //////////////edit/////////////
  onEdit(item:any) {
    this.uptLT = item;
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

  deleteResult() {
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

}
