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
  selector: 'app-add-defect',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './add-defect.component.html',
  styleUrls: ['./add-defect.component.css'],
})
export class AddDefectComponent implements OnInit {
  addT: any = [];
  workorderCounterId: any;
  add_new_work_orders_add_work_order='Add New Defect';
  add_new_work_orders_created_by='Created By';
  add_new_work_orders_work_order_id='Defect ID';
  add_new_work_orders_store_work_title='Outlet Work Title'
  add_new_work_orders_location='Location';
  add_new_work_orders_property_developer='Client';
  add_new_work_orders_element='Element';
  add_new_work_orders_floor='Floor';
  add_new_work_orders_defect='Defect';
  add_new_work_orders_costs='Costs';
  add_new_work_orders_competency='Competency';
  add_new_work_orders_invoice='Invoice';
  add_new_work_orders_days_to_execute='Days To Execute';
  add_new_work_orders_charge_to='Charge To';
  add_new_work_orders_priority='Priority';
  add_new_work_orders_main_contractor='Main Contractor';
  add_new_work_orders_next_action='Next Action';
  add_new_work_orders_date_scheduled='Date Scheduled';
  add_new_work_orders_cause='Cause';
  add_new_work_orders_time_scheduled='Time Scheduled';
  add_new_work_orders_am_pm='AM/PM';
  add_new_work_orders_work_order_description='Defect Description';
  add_new_work_orders_upload_pictures='Upload Pictures';
  add_new_work_orders_upload_documents_pdf_only='Upload Documents (PDF Only)';
  add_new_work_orders_create_new_work_order='Submit Defect';
  all_work_orders_all_work_orders='All Defects';
  all_work_orders_print_work_order='Print Defect';
  my_pending_work_orders_my_pending_work_orders='My Pending Defects';
  my_pending_work_orders_refresh_list='Refresh List';
  my_pending_work_orders_add_work_order='Add Defect';
  work_order_details_my_pending_work_orders='My Pending Defects';
  work_order_details_print='Print';
  work_order_details_edit_work_order='Edit Defect';
  work_order_details_remarks_and_approval_log='Remarks And Approval Log';
  work_order_details_created_date='Created Date';
  work_order_details_created_time='Created Time';
  work_order_details_created_by='Created By';
  work_order_details_action='Action';
  work_order_details_remarks='Remarks';
  work_order_details_next_action='Next Action';

  generals_search = 'Search';
  generals_clear_search = 'Clear Search';
  generals_view_details = 'View Details';
  generals_uploaded_images = 'Uploaded Images'
  generals_edit = 'Edit'
  generals_delete = 'Delete';
  generals_creation_date = 'Creation Date';
  generals_actions = 'Actions';


  elementload: Boolean = false;
  daysToExecuteLoad: Boolean = false;
  defectLoad: Boolean = false;
  competencyLoad: Boolean = false;
  priorityLoad: Boolean = false;
  causeLoad: Boolean = false;

  currentDate!: string;
  currentTime!: string;

  public propertyDevelopers = [];
  pdCodeList =[];
  loadsmplrflag:boolean=false;
  progress = 0;
  goteditFlag:boolean=false;
  edititem: any;
  public allContractorsList = [];
  propertiesHouseNumberList = [];
  propertiesPrecinctList = [];
  propertiesStreetsList = [];
  propertiesList = [];
  nextActionLoad:Boolean=false;
  unsortedrows2 = [];
  public rowslanguages = [];
  unsortedrows = [];
  rows = [];
  public locations = [];
  locationload: Boolean = false;
  scan: Boolean = false;
  public scanResults: any;
  sorted = [];
  public selectedLocation: any;
  public selectedElement: any;
  public selectDefect: any;
  public selectedDaysToExecute: any;
  public SelectednextAction: any;
  
  showSuccessMsg = false;
  TicketSubmitted = '';
  public userNickName: any;
  showErrorMsg = false;
  public userLevel: any;
  srch = [];
 addWorkOrderValidation = false;
 selectedPics: FileList | undefined;
 selectedFiles: FileList | undefined;
 haveFiles: boolean = false;
 eventFiles: any;
 havePictures: boolean = false;
 eventPics: any;
 
 notificationsUrl = "https://fcm.googleapis.com/fcm/send";

 pictures = [];
 files = [];
  /////////////API//////////
  



 



  reformatDate(dateStr: string) {
    var dArr = dateStr.split("-");  // ex input "2010-01-18"
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0]; //ex out: "18/01/10"
  }



 
  propertyDevelopers1 = [
    { pd_name: 'Developer A' },
    { pd_name: 'Developer B' },
    { pd_name: 'Developer C' },
    { pd_name: 'Developer D' },
    { pd_name: 'Developer E' }
  ];
  ngOnInit() {
    // Initialization logic here
  }
  locations1 = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose'
  ];
  elements: string[] = [
    'Element 1',
    'Element 2',
    'Element 3',
    'Element 4',
    'Element 5'
  ];
  defects: string[] = [
    'Defect 1',
    'Defect 2',
    'Defect 3',
    'Defect 4',
    'Defect 5'
  ];
  competencys: string[] = [
    'Competency 1',
    'Competency 2',
    'Competency 3',
    'Competency 4'
  ];
  
  selectedCompetency: string = 'Competency 2'; // Default selected value
  days_to_executes: number[] = [1, 2, 3, 4, 5, 6, 7];
  selectedDay: number = 3; // Default selected value
  contractorsList: string[] = ['Contractor A', 'Contractor B', 'Contractor C'];
  selectedContractor: string = 'Contractor B'; // Default selected contractor
  prioritys: string[] = ['High', 'Medium', 'Low'];
  selectedPriority: string = 'Medium'; // Default selected priority

  causes: string[] = ['Cause A', 'Cause B', 'Cause C'];
  selectedCause: string = 'Cause A'; // Default selected cause

  timeList: string[] = ['08:00 AM', '09:00 AM', '10:00 AM'];
  selectedTime: string = '09:00 AM'; // Default selected time

  nextActions: { task: string }[] = [
    { task: 'Action 1' },
    { task: 'Action 2' },
    { task: 'Action 3' }
  ];
  selectedNextAction: { task: string } = { task: 'Action 1' }; // Default selected action

  store_work_titleList: { site_information_project_work_title: string }[] = [
    { site_information_project_work_title: 'Title A' },
    { site_information_project_work_title: 'Title B' },
    { site_information_project_work_title: 'Title C' }
  ];
  selectedStoreWorkTitle: { site_information_project_work_title: string } = { site_information_project_work_title: 'Title A' }; // Default selected title

}
