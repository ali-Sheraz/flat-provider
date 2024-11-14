import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../../../header/header.component';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
declare const $: any;
@Component({
  selector: 'app-mp-super-admin',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './mp-super-admin.component.html',
  styleUrls: ['./mp-super-admin.component.css']
})
export class MpSuperAdminComponent implements OnInit {
  //////////////Alert variable///////
  showSuccessMsg: boolean = false;
  showErrorMsg: boolean = false;
  scan: boolean = false;
  scanResults = '';
  typeofunitload: Boolean = false;
  addEmployeeValidation = false;
  editFlag: boolean = false;

  //////////total list/////////////
  totalList!: number
  searchT: any = [];
  public viewEmp: any = [];
  ///////////get variables///////
  AllList: any;
  public AllPdList = [];
  saveT: any = [];
  userLevel!: string | null;
  ///////////////delete variable////////
  delete_results = "Deleted";
  /////////////add variables///////
  public ChangesSavingResponse: string | undefined;

  editf: any;
  unsortedrows2 = [];
  //////////////API/////////////



  ngOnInit() {

  }
  ///////////////on view////////

  onView(f: any) {
    this.viewEmp = f;
    console.log(f);
    $('#view_modal').modal('show');
  }

  //////////////ADD///////////


  addReset() {
    this.addEmployeeValidation = false;
    this.saveT = [];
    $('#add_modal').modal('show');
  }
  ///////////////onedit//////////////
  onEdit(f: any) {
    this.editf = f;
    $('#add_modal').modal('show');
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
  rows = [
    { property_developer: 'Client A', user_level: 'Super Admin' },
    { property_developer: 'Client B', user_level: 'Admin' },
    { property_developer: 'Client C', user_level: 'PLA Admin' },
    { property_developer: 'Client D', user_level: 'User' }
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
  
  public userLevels = ['Super Admin', 'Admin', 'PLA Admin', 'User'];

  // Default user level for testing
  ///////////////set up module permission/////

}
