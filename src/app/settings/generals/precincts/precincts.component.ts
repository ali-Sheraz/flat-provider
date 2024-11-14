import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../../../header/header.component';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
declare const $: any;

@Component({
  selector: 'app-precincts',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './precincts.component.html',
  styleUrls: ['./precincts.component.css']
})
export class PrecinctsComponent implements OnInit {
/////////////total list variable//////////
totalList: any;

//////////////alert variables////////////
scan: boolean = false;
scanResults = '';
showSuccessMsg: Boolean = false;
addTPrecinctValidation: Boolean = false;
///////////search variables//////////
precincts_property_developer = "Client";
precincts_projects_precinct="Precincts/Projects/Condos";
precincts_projects_sub_precinct= "Sub Precincts";
generals_delete="Delete";
public PropertyDevelopers = [];
public AllPdList = [];
precinctsList = [];
public addLT: any = {};
searchT: any = [];
public rows = [];
///////////////deletion/////////
delete_results="Deleted";
//////////////add//////////
public AddedMsg: any;
/////////////update///////
public uptLT: any = {};
///////////languages/////
public languages = [];
public userLevel: any;
/////////////api////////////

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
public mdata = [
  { property_developer: 'ABC Developers', precinct: 'Greenwood Complex' },
  { property_developer: 'XYZ Construction', precinct: 'Lakeside Towers' },
  { property_developer: 'LMN Builders', precinct: 'Riverside Estates' },
  { property_developer: 'PQR Realty', precinct: 'Hillside Residences' },
  { property_developer: 'DEF Homes', precinct: 'Sunset Villas' },
  { property_developer: 'GHI Properties', precinct: 'Maplewood Apartments' },
  { property_developer: 'JKL Group', precinct: 'Oakwood Plaza' },
  { property_developer: 'MNO Construction', precinct: 'Seaside Villas' }
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
  //////////////add percenint////////
  addReset() {
    let randomnumber = Math.floor(Math.random() * 500);
    this.addLT = { 'id': randomnumber };
    $('#add_Precinct').modal('show');
  }
  ///////////update//////
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


  
}
