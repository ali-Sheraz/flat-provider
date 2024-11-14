import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../../../header/header.component';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
declare const $: any;

@Component({
  selector: 'app-sub-precincts',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './sub-precincts.component.html',
  styleUrls: ['./sub-precincts.component.css']
})
export class SubPrecinctsComponent implements OnInit {
/////////////total list variable//////////
totalList: any;

//////////////alert variables////////////
scan: boolean = false;
scanResults = '';
showErrorMsg: Boolean = false;
showSuccessMsg: Boolean = false;
public AddedMsg: any;
addSubPrecinctValidation: Boolean = false;
///////////search variables//////////
precincts_property_developer = "Client";
precincts_projects_precinct = "Precincts/Projects/Condos";
precincts_projects_sub_precinct = "Sub-Precincts/Sub-Projects/Sub-Condos";
generals_delete = "Delete";
public AllPdList = [];
precinctsList = [];
public addLT: any = {};
searchT: any = [];
public rows = [];
sub_precinctsList = [];
///////////////deletion/////////
delete_results="Deleted";
//////////////add//////////
public precinctAdd: any;
/////////////update///////
public uptLT: any = {};
///////////languages/////
public languages = [];
public userLevel: any;
/////////////API///////////





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
  { precinct: 'Greenwood Complex', sub_precinct: 'Phase 1' },
  { precinct: 'Lakeside Towers', sub_precinct: 'Building A' },
  { precinct: 'Riverside Estates', sub_precinct: 'Lot 10' },
  { precinct: 'Hillside Residences', sub_precinct: 'Section B' },
  { precinct: 'Sunset Villas', sub_precinct: 'Unit 5' },
  { precinct: 'Maplewood Apartments', sub_precinct: 'Block 3' },
  { precinct: 'Oakwood Plaza', sub_precinct: 'Level 2' },
  { precinct: 'Seaside Villas', sub_precinct: 'Garden Area' }
];
public precincts = [
  { precinct: 'Greenwood Complex' },
  { precinct: 'Lakeside Towers' },
  { precinct: 'Riverside Estates' },
  { precinct: 'Hillside Residences' },
  { precinct: 'Sunset Villas' },
  { precinct: 'Maplewood Apartments' },
  { precinct: 'Oakwood Plaza' },
  { precinct: 'Seaside Villas' }
];



/////////////searching///////////////////////////


//////////////add///////////////////
addReset() {
  let randomnumber = Math.floor(Math.random() * 500);
  this.addLT = { 'id': randomnumber };
  $('#add_sub_precinct').modal('show');
}

////////////Edit//////////////
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