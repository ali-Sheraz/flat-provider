import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { MatTabsModule } from '@angular/material/tabs'; // Import MatTabsModule
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { TabViewModule } from 'primeng/tabview';

declare const $: any;
type AOA = any[][];


@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule,MatTabsModule,TabViewModule,HeaderComponent, SidebarComponent],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css'],
})
export class LanguagesComponent implements OnInit {

  ///////////total list/////////

  totalList: any;
  //////////alert variable//////
  addTValidation: Boolean = false;
  showErrorMsg: Boolean = false;
  showSuccessMsg: Boolean = false;
  public AddedMsg!: string;
  op: boolean = false;
  scan: boolean = false;
  scanResults = '';
  //////////search variable//////
  searchT: any = [];
  addT: any = [];
  public addLT: any = {};
  public uptLT: any = {};
  public PropertyDevelopers = [];
  public userLevel: any;
  languagesList = [];
  /////////delete//
  delete_results="Deleted";
  /////////////API////////////
 

  ngOnInit() {
   
   
  }
  initDropdowns() {
    $('.dropdown-toggle').on('click', (e: any) => {
      e.preventDefault();
      const $el = $(e.currentTarget).next('.dropdown-menu'); // Use `e.currentTarget` instead of `this`
      $('.dropdown-menu').not($el).slideUp();
      $el.slideToggle();
    });
  }

  ////////////add languauge////
  addReset() {
    let randomnumber = Math.floor(Math.random() * 500);
    this.addLT = { 'id': randomnumber };
    $('#add_language').modal('show');
  
  }

  ////////////update langauge///

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
  languages = [
    { name: 'English' },
    { name: 'Spanish' },
    { name: 'French' },
    { name: 'German' },
    { name: 'Chinese' },
    { name: 'Japanese' },
    { name: 'Korean' },
    { name: 'Portuguese' },
    { name: 'Italian' }
  ];
  rows = [
    { language: 'English', status: 'Completed' },
    { language: 'Spanish', status: 'In Progress' },
    { language: 'French', status: 'Completed' },
    { language: 'German', status: 'Canceled' },
    { language: 'Chinese', status: 'In Progress' },
    { language: 'Japanese', status: 'Completed' }
  ];

}
