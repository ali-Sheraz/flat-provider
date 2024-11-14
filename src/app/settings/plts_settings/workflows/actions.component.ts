import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../../../header/header.component';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
declare const $: any;
@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  ///////////total list//////////////
  totalList: any;
  ///////////////alert variables/////////
  scan: boolean = false;
  editFlag: boolean = false;
  addTypeOfUnitValidation: Boolean = false;
  nextActionLoad: Boolean = false;
  scanResults = '';
  showErrorMsg: Boolean = false;
  showSuccessMsg: Boolean = false;
  public addMsg: any;
  userLevelLoad: Boolean = false;
  ///////////search variable////////
  searchT: any = [];
  residentsList = [];
  public AllPdList = [];
  public pd: any;
  public rows = [];
  public euptLT: any = {};
  public uptLT: any = {};
  public typeOfUnit2 = [];
  public addLT: any = {};
  ///////////delete variable//////
  delete_results="Deleted";
  ////////////////////APi//////////


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
  //////////////////get functions///////////
 


 
 

  /////////////edit/////////////
  onEdit(item:any) {
    console.log(item);
    $('#Edit_modal').modal('show');
    this.uptLT = item;
  }

  
  ///////////add /////////
  addReset() {
    let randomnumber = Math.floor(Math.random() * 500);
    this.addLT = { 'id': randomnumber };
    $('#add_modal').modal('show');
    this.editFlag = false;
  }
 
 



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
  public userLevels = ['Super Admin', 'Admin', 'PLA Admin', 'User'];
  public data = [
    {
      property_developer: 'Client A',
      workflow_for: 'Approval',
      order: 1,
      from_user_level: 'Admin',
      task: 'Review Proposal',
      to_user_level: 'Manager'
    },
    {
      property_developer: 'Client B',
      workflow_for: 'Documentation',
      order: 2,
      from_user_level: 'Manager',
      task: 'Prepare Contract',
      to_user_level: 'Director'
    },
    {
      property_developer: 'Client C',
      workflow_for: 'Processing',
      order: 3,
      from_user_level: 'Director',
      task: 'Sign Contract',
      to_user_level: 'Admin'
    },
    {
      property_developer: 'Client D',
      workflow_for: 'Completion',
      order: 4,
      from_user_level: 'Admin',
      task: 'Finalize Deal',
      to_user_level: 'Manager'
    },
    {
      property_developer: 'Client E',
      workflow_for: 'Follow-up',
      order: 5,
      from_user_level: 'Manager',
      task: 'Send Confirmation',
      to_user_level: 'Director'
    }
  ];
  next_action = [
    { task: 'Review Proposal' },
    { task: 'Prepare Contract' },
    { task: 'Sign Contract' },
    { task: 'Finalize Deal' },
    { task: 'Send Confirmation' }
  ];
}
