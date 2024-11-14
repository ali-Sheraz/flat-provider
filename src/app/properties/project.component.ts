import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

declare const $: any;
type AOA = any[][];

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],


})
export class ProjectComponent implements OnInit {
  /////////////Alert varaible////////
  PropertyAdded = '';
  PropertyUpdated = '';
  Results = '';
  scanResults = '';

  deleteID!: string;
  ///////////////title////////////
  title = 'Properties';
  /////////permission variable//////
  permissions_edit = false;
  permissions_delete = false;
  permissions_view = false;
  permissions_create = false;
  ///////////////total list varaiblle///////////
  totalList: any;

  ///////////////////add property button varaibles//
  properties_add_property = 'Add Property';

  ///////////search varaibles////////

  searchT: any = [];
  properties_property_id = 'Property ID';
  properties_house_owner = 'House Owner (Resident)';
  properties_house_number = 'House Number';
  properties_street = 'Street';
  properties_type_of_unit = 'Type of Unit';
  properties_precinct = 'Precincts/Projects';
  properties_main_contractor = 'Main Contractor';
  precinctsList = [];
  propertiesStreetsList = [];
  propertiesHouseNumberList = [];
  public MainContractors = [];
  generals_search = 'Search';
  generals_clear_search = 'Clear Search';
  //////////////////////get residents variables///////////////
  public residents = [];
  propertiesPrecinctList = [];
  public rows = [];
  public srch = [];
  propertiesList = [];
  ////////////get property variabales//////
  public AllPd = [];
  public AllPdList = [];

  ///////////////////create project variables/////////////////////

  properties_create_property = 'Create Property';
  properties_construction_no = 'Construction No';
  public addP: any = [];
  sub_precinctsList = [];
  sub_precinctsListOrignal = [];
  properties_sub_precinct = 'Sub-Precincts/Projects';
  properties_township = 'Township';
  properties_city = 'City';
  properties_postal_code = 'Postal Code';
  properties_state = 'State';
  properties_country = 'Country';
  public countryList = [];
  public malaysiaStatesList = [];

  properties_property_developer = 'Client';
  properties_latitude = 'Latitude';
  properties_longitude = 'Longitude';
  properties_type_of_contract = 'Type of Contract';
  properties_contract_start_date = 'Contract Start Date';
  properties_contract_end_date = 'Contract End Date';
  properties_remarks = 'Remarks';
  properties_upload_floor_plans = 'Upload Floor Plans (Pdf Only)';
  addPropertyValidation = false;
  selectedPics: FileList | undefined;
  eventPics: any;
  havePictures: boolean = false;
  showSuccessMsg = false;
  showErrorMsg = false;
  uploadPicsFolder = '/General/Properties';
  logoPic: any;
  pictures = [];
  currentDate: string | undefined;
  properties_address = 'Address';
  ////////////////view variables/////////
  totalListDocuments: any = 'loading...';
  public viewP: any = [];
  delete_results="Deleted";
  public rowsDocuments = [];
  properties_print_qr_code = 'Print QR Code';
  ////////////delete///////////////


  generals_delete = 'Delete';

  ///////////edit variable///////////
  generals_edit = 'Edit'


  /////////////////////////////////languages//////////
  properties_edit_property = 'Edit Property';
  properties_update_property = 'Update Property';

  generals_view_details = 'View Details';
  generals_uploaded_images = 'Uploaded Images'
  generals_uploaded_files = 'Uploaded Files';
  generals_actions = 'Actions';
  public languages = [];


  ////////////////////////////////edit variables////////////////////////
  public uptP: any = [];
  showSuccessMsgUpdate = false;
  value: any;
  public row = [
    {
      id: '1',
      precinct: 'Downtown',
      street: '1st Avenue',
      house_number: '101',
      house_owner: 'John Doe',
      type_of_unit: 'Apartment',
      contract_end_date: '2024-12-31',
      type_of_contract: 'Lease',
      main_contractor: 'Contractor A'
    },
    {
      id: '2',
      precinct: 'Uptown',
      street: '2nd Avenue',
      house_number: '202',
      house_owner: 'Jane Smith',
      type_of_unit: 'Condo',
      contract_end_date: '2025-06-30',
      type_of_contract: 'Rental',
      main_contractor: 'Contractor B'
    },
    {
      id: '3',
      precinct: 'Midtown',
      street: '3rd Avenue',
      house_number: '303',
      house_owner: 'Michael Johnson',
      type_of_unit: 'House',
      contract_end_date: '2024-08-15',
      type_of_contract: 'Sale',
      main_contractor: 'Contractor C'
    },
    {
      id: '4',
      precinct: 'Suburb',
      street: '4th Avenue',
      house_number: '404',
      house_owner: 'Emily Davis',
      type_of_unit: 'Townhouse',
      contract_end_date: '2026-02-28',
      type_of_contract: 'Lease',
      main_contractor: 'Contractor D'
    }
  ];

  addReset() {
    $('#create_project').modal('show');
  }
  onedit() {
    $('#edit_project').modal('show');
  }

  initDropdowns() {
    $('.dropdown-toggle').on('click', (e: any) => {
      e.preventDefault();
      const $el = $(e.currentTarget).next('.dropdown-menu'); // Use `e.currentTarget` instead of `this`
      $('.dropdown-menu').not($el).slideUp();
      $el.slideToggle();
    });
  }
  ngOnInit() {
    // Initialization logic here
  }
  //////////////////view profile////////////////////////////////////////////



 
  //////////////////documwnts upload///////////////////////////////////////
  
  /////////////////////delete result/////////////////////////////////////////////
 
  onDelete(c: { id: string; }) {
    console.log(c.id);
    this.deleteID=c.id;
    $('#delete').modal('show');
  }

  deleteConfirmation() {
    $('#delete').modal('hide');
    
      $('#delete_result').modal('show');
    
  }

  deleteResult(){
    $('#delete_result').modal('hide');

  }

  ngOnDestroy() {
    $('#create_project').modal('hide');
    $('#view_project').modal('hide');
    $('#edit_project').modal('hide');

  }
  viewProfile() {
    $('#view_project').modal('show');
  }

}
