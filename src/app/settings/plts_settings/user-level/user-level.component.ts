import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../../../header/header.component';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
declare const $: any;
@Component({
  selector: 'app-user-level',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './user-level.component.html',
  styleUrls: ['./user-level.component.css']
})
export class UserLevelComponent implements OnInit {
  ///////////total list variable/////
  totalList: any;
  searchT: any = [];
  /////////////alert variable////////
  showErrorMsg: Boolean = false;
  showSuccessMsg: Boolean = false;
  addTypeOfUnitValidation: Boolean = false;
  public addMsg: any;
  scan: boolean = false;
  scanResults = '';
  editFlag: boolean = false;
  UpdatedMsg: any;
  //////////search variables/////////////
  public addLT: any = {};
  public uptLT: any = {};

  public AllPdList = [];

  precinctsList = [];
  delete_results="Deleted";




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
  ///////////////get functions////////////

  //////////////search functions//////////



  ////////////add function///////////

  addReset() {
    let randomnumber = Math.floor(Math.random() * 500);
    this.addLT = { 'id': randomnumber };
    $('#add_modal').modal('show');
  }
  ////////////Edit function//////////
  onEdit(item: any) {
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
    public data = [
      { property_developer: 'Client A', user_level: 'Super Admin' },
      { property_developer: 'Client B', user_level: 'Admin' },
      { property_developer: 'Client C', user_level: 'PLA Admin' },
      { property_developer: 'Client D', user_level: 'User' },
      { property_developer: 'Client E', user_level: 'Super Admin' },
      { property_developer: 'Client F', user_level: 'Admin' },
      { property_developer: 'Client G', user_level: 'PLA Admin' },
      { property_developer: 'Client H', user_level: 'User' }
    ];

}
