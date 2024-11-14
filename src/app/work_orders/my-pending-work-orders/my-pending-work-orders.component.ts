import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { IMyDpOptions } from 'mydatepicker';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Router } from '@angular/router';


declare const $: any;
type AOA = any[][];

const SCRIPT_PATH = 'https://app.smplrspace.com/lib/smplr.js';
declare let smplr: any;
@Component({
  selector: 'app-my-pending-work-orders',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './my-pending-work-orders.component.html',
  styleUrls: ['./my-pending-work-orders.component.css'],

})

export class MyPendingWorkOrdersComponent implements OnInit {
 constructor(private router: Router) { } 
  excelData: AOA = [[1, 2], [3, 4]];

  public superAdminLoggedIn: boolean | undefined;
  public ticket_id_counter = 0;
  public userLevel!: string;
  public userNickName: any;

  public myDatePickerOptions1: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd/mm/yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };

  itemObj: any;

  DeleteFeedback = '';
  showDeletionResponse = false;

  eventPics: any;
  eventFiles: any;
  havePictures: boolean = false;
  haveFiles: boolean = false;

  properties = [];
  propertiesHouseNumberList = [];
  showSuccessMsg = false;

  totalPics: any;
 
  totalFiles: any;;
  showErrorMsg = false;
  viewPictures = [];
  viewFiles = [];

  selectedPics!: FileList;
  selectedFiles!: FileList;

  nextActionSuccess = false;
  nextActionMsg!: string;
  approvalLog = [];

  ticketScan = false;
  approvalLogScan = false;
  addRemarkFromAll = false;

  pictures = [];
  existingPics = [];
  files = [];
  existingFiles = [];

  propertiesList = [];

  enableZoom: Boolean = true;
  cont: any = [];
  scanResultsApproval = '';
  scanResults = '';

  TicketSubmitted = '';
  propertiesPrecinctList = [];

  rows = [];
  unsortedrows = [];
  unsortedApprovalLog = [];

  srch = [];

  viewT: any = [];
  editT: any = [];
  addT: any = [];
  searchT: any = [];

  next_action_from_edit!: string;

  public timeList = [];
  public submitterActions = [];
  public statuses = [];

  public AllPd = [];
  public AllPdList = [];

  public super_Admin = 'Super Admin';
  public pla_admin = 'PLA Admin';
  public pla_frontdesk = 'PLA Frontdesk';
  public pla_supervisor = 'PLA Supervisor';
  public pd_admin = 'PD Admin';
  public pd_frontdesk = 'PD Frontdesk';
  public pd_supervisor = 'PD Supervisor';
  public pd_managment = 'PD Management';
  public con_admin = 'CON Admin';
  public con_supervisor = 'CON Supervisor';
  public con_crew = 'CON Crew';

  notificationsUrl = "https://fcm.googleapis.com/fcm/send";


  addWorkOrderValidation = false;
  addWorkOrderFlag = false;
  showPD = false;
  showfloorplan = true;

  totalList: any;


  arrayBuffer: any;
  file: File | undefined;

  currentDate: string | undefined;
  currentTime: string | undefined;

  albums = [];
  residentArray = [];
  residentname = "loading...";
  residentEmail = "loading...";
  residentphone = "loading...";

 

  deleteID: any;
  delete_results="Deleted";

  generals_search = 'Search';
  generals_clear_search = 'Clear Search';
  generals_view_details = 'View Details';
  generals_uploaded_images = 'Uploaded Images'
  generals_edit = 'Edit'
  generals_delete = 'Delete';
  generals_creation_date = 'Creation Date';
  generals_actions = 'Actions';
  generals_uploaded_files = 'Uploaded Files';
  generals_download = 'Download';


  add_new_work_orders_add_work_order = 'Add New Work Order';
  add_new_work_orders_created_by = 'Created By';
  add_new_work_orders_work_order_id = 'Work Order ID';
  add_new_work_orders_street = 'Street';
  add_new_work_orders_house_number = 'House Number';
  add_new_work_orders_location = 'Location';
  add_new_work_orders_precinct_project = 'Precinct / Project';
  add_new_work_orders_element = 'Element';
  add_new_work_orders_floor = 'Floor';
  add_new_work_orders_defect = 'Defect';
  add_new_work_orders_costs = 'Costs';
  add_new_work_orders_competency = 'Competency';
  add_new_work_orders_invoice = 'Invoice';
  add_new_work_orders_days_to_execute = 'Days To Execute';
  add_new_work_orders_charge_to = 'Charge To';
  add_new_work_orders_priority = 'Priority';
  add_new_work_orders_main_contractor = 'Main Contractor';
  add_new_work_orders_next_action = 'Next Action';
  add_new_work_orders_date_scheduled = 'Date Scheduled';
  add_new_work_orders_cause = 'Cause';
  add_new_work_orders_time_scheduled = 'Time Scheduled';
  add_new_work_orders_am_pm = 'AM/PM';
  add_new_work_orders_work_order_description = 'Work Order Description';
  add_new_work_orders_upload_pictures = 'Upload Pictures';
  add_new_work_orders_upload_documents_pdf_only = 'Upload Documents (PDF Only)';
  add_new_work_orders_create_new_work_order = 'Create Work Order';
  all_work_orders_all_work_orders = 'All Work Orders';
  all_work_orders_print_work_order = 'Print Work Order';
  my_pending_work_orders_my_pending_work_orders = 'My Pending Work Orders';
  my_pending_work_orders_refresh_list = 'Refresh List';
  my_pending_work_orders_add_work_order = 'Add Work Order';
  work_order_details_my_pending_work_orders = 'My Pending Work Orders';
  work_order_details_print = 'Print';
  work_order_details_edit_work_order = 'Edit Work Order';
  work_order_details_remarks_and_approval_log = 'Remarks And Approval Log';
  work_order_details_created_date = 'Created Date';
  work_order_details_created_time = 'Created Time';
  work_order_details_created_by = 'Created By';
  work_order_details_action = 'Action';
  work_order_details_remarks = 'Remarks';
  work_order_details_next_action = 'Next Action';

  dashboard_property_developer = 'Client';
  users_status = 'Status';
  work_order_details_days_open = 'Days Open';
  work_order_details_date_closed = 'Date Closed';
  work_order_details_update_work_order = 'Update Work Order';
  work_order_details_work_order_details = 'Work Order Details';
  work_order_details_resident_name = 'Resident Name';
  work_order_details_resident_phone = 'Resident Phone';
  work_order_details_time_closed = 'Time Closed';
  work_order_details_closed_by = 'Closed By';
  work_order_details_add_remark = 'Add Remark';

  add_new_work_orders_property_developer = 'Client';


  dataArray = [];
  permissions_userlevel!: string | null;
  permissions_view = false;
  permissions_create = false;
  permissions_edit = false;
  permissions_delete = false;

    colors!: any[];
  public nextActions = [];
  nextActionLoad: Boolean = false;
  unsortedrows2 = [];
 

  ngOnInit() {
  }

  

  setVisibility() {
    if (this.userLevel === 'Super Admin') {
      this.superAdminLoggedIn = true;
    }
    if (this.userLevel === 'PD Admin' || this.userLevel === 'PLA Admin' || this.userLevel === 'Super Admin') {
      this.addWorkOrderFlag = true;
    }
  }

  onEdit(item:any) {
    this.editT=item
    console.log(item)
      this.router.navigate(['work_orders/submit_work_order']);
  }
  onEditFromView(item:any) {
    this.editT=item
    console.log(item)
    this.router.navigate(['work_orders/submit_work_order']);
  }

  onView(item:any) {
    this.viewT=item
    $('#view_pending_work_order').modal('show');
  }

  initDropdowns() {
    $('.dropdown-toggle').on('click', (e: any) => {
      e.preventDefault();
      const $el = $(e.currentTarget).next('.dropdown-menu'); // Use `e.currentTarget` instead of `this`
      $('.dropdown-menu').not($el).slideUp();
      $el.slideToggle();
    });
  }


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
 

  
  getfinalColor(status: string): string {
    switch (status) {
      case 'Completed': return 'lightgreen';
      case 'Pending': return 'lightyellow';
      case 'In Progress': return 'lightblue';
      case 'On Hold': return 'lightgrey';
      case 'Cancelled': return 'lightcoral';
      default: return 'white';
    }
  }

  getTheFont(status: string): string {
    switch (status) {
      case 'Completed': return 'black';
      case 'Pending': return 'black';
      case 'In Progress': return 'black';
      case 'On Hold': return 'black';
      case 'Cancelled': return 'white';
      default: return 'black';
    }
  }



  
  ngOnDestroy() {
    $('#add_ticket').modal('hide');
    $('#edit_work_order').modal('hide');
    $('#delete_work_order').modal('hide');
    $('#view_all_work_order').modal('hide');
  }

  

  reformatDate(dateStr: string) {
    var dArr = dateStr.split("-");  // ex input "2010-01-18"
    return dArr[2] + "/" + dArr[1] + "/" + dArr[0]; //ex out: "18/01/10"
  }
  getTheColor(status: any) {
    return this.colors.filter(item => item.task === status && item.property_developer === localStorage.getItem('property_developer'));
  }
  staticData = [
    {
      status: 'Completed',
      id: 1,
      assign_to: 'John Doe',
      main_contractor: 'ABC Ltd.',
      store_work_title: 'Work Title 1',
      subject: 'Subject 1',
      location: 'Location 1',
      element: 'Element 1',
      defect: 'Defect 1',
      date_scheduled: '2024-08-01',
      time_scheduled: '10:00',
      ampm: 'AM',
      date_closed: '2024-08-05',
      priority: 'Urgent',
      precinct: 'Precinct 1',
      street: 'Street 1',
      house_number: '100',
      resident_name: 'Alice Smith',
      resident_phone: '123-456-7890'
    },
    {
      status: 'Pending',
      id: 2,
      assign_to: 'Jane Smith',
      main_contractor: 'XYZ Inc.',
      store_work_title: 'Work Title 2',
      subject: 'Subject 2',
      location: 'Location 2',
      element: 'Element 2',
      defect: 'Defect 2',
      date_scheduled: '2024-08-02',
      time_scheduled: '11:00',
      ampm: 'AM',
      date_closed: '2024-08-06',
      priority: 'Low',
      precinct: 'Precinct 2',
      street: 'Street 2',
      house_number: '101',
      resident_name: 'Bob Johnson',
      resident_phone: '234-567-8901'
    },
    {
      status: 'In Progress',
      id: 3,
      assign_to: 'Alice Johnson',
      main_contractor: 'LMN Ltd.',
      store_work_title: 'Work Title 3',
      subject: 'Subject 3',
      location: 'Location 3',
      element: 'Element 3',
      defect: 'Defect 3',
      date_scheduled: '2024-08-03',
      time_scheduled: '12:00',
      ampm: 'PM',
      date_closed: '2024-08-07',
      priority: 'High',
      precinct: 'Precinct 3',
      street: 'Street 3',
      house_number: '102',
      resident_name: 'Carol Davis',
      resident_phone: '345-678-9012'
    },
    {
      status: 'On Hold',
      id: 4,
      assign_to: 'Bob Brown',
      main_contractor: 'PQR Co.',
      store_work_title: 'Work Title 4',
      subject: 'Subject 4',
      location: 'Location 4',
      element: 'Element 4',
      defect: 'Defect 4',
      date_scheduled: '2024-08-04',
      time_scheduled: '01:00',
      ampm: 'PM',
      date_closed: '2024-08-08',
      priority: 'Medium',
      precinct: 'Precinct 4',
      street: 'Street 4',
      house_number: '103',
      resident_name: 'David Lee',
      resident_phone: '456-789-0123'
    },
    {
      status: 'Cancelled',
      id: 5,
      assign_to: 'Charlie Davis',
      main_contractor: 'RST Ltd.',
      store_work_title: 'Work Title 5',
      subject: 'Subject 5',
      location: 'Location 5',
      element: 'Element 5',
      defect: 'Defect 5',
      date_scheduled: '2024-08-05',
      time_scheduled: '02:00',
      ampm: 'PM',
      date_closed: '2024-08-09',
      priority: 'Urgent',
      precinct: 'Precinct 5',
      street: 'Street 5',
      house_number: '104',
      resident_name: 'Eva Martinez',
      resident_phone: '567-890-1234'
    },
    {
      status: 'Completed',
      id: 6,
      assign_to: 'Diana Evans',
      main_contractor: 'UVW Inc.',
      store_work_title: 'Work Title 6',
      subject: 'Subject 6',
      location: 'Location 6',
      element: 'Element 6',
      defect: 'Defect 6',
      date_scheduled: '2024-08-06',
      time_scheduled: '03:00',
      ampm: 'PM',
      date_closed: '2024-08-10',
      priority: 'Low',
      precinct: 'Precinct 6',
      street: 'Street 6',
      house_number: '105',
      resident_name: 'Frank Walker',
      resident_phone: '678-901-2345'
    },
    {
      status: 'Pending',
      id: 7,
      assign_to: 'Eve Wilson',
      main_contractor: 'XYZ Inc.',
      store_work_title: 'Work Title 7',
      subject: 'Subject 7',
      location: 'Location 7',
      element: 'Element 7',
      defect: 'Defect 7',
      date_scheduled: '2024-08-07',
      time_scheduled: '04:00',
      ampm: 'PM',
      date_closed: '2024-08-11',
      priority: 'High',
      precinct: 'Precinct 7',
      street: 'Street 7',
      house_number: '106',
      resident_name: 'Grace Allen',
      resident_phone: '789-012-3456'
    },
    {
      status: 'In Progress',
      id: 8,
      assign_to: 'Frank Moore',
      main_contractor: 'LMN Ltd.',
      store_work_title: 'Work Title 8',
      subject: 'Subject 8',
      location: 'Location 8',
      element: 'Element 8',
      defect: 'Defect 8',
      date_scheduled: '2024-08-08',
      time_scheduled: '05:00',
      ampm: 'PM',
      date_closed: '2024-08-12',
      priority: 'Medium',
      precinct: 'Precinct 8',
      street: 'Street 8',
      house_number: '107',
      resident_name: 'Hannah Roberts',
      resident_phone: '890-123-4567'
    }
  ];
  
  
  approvalLogs = [
    { created_date: '2024-08-01', created_time: '10:00 AM', created_by: 'User A', action: 'Approved', remarks: 'Everything looks good.' },
    { created_date: '2024-08-02', created_time: '11:30 AM', created_by: 'User B', action: 'Rejected', remarks: 'Missing information.' },
    { created_date: '2024-08-03', created_time: '02:00 PM', created_by: 'User C', action: 'Pending', remarks: 'Awaiting further details.' }
  ];
  AddRemarkFromAllWorkOrder(f:any) {
  }
  propertiesStreetsList = [
    'Main Street',
    'Elm Street',
    'Oak Avenue',
    'Pine Road',
    'Maple Drive',
    'Cedar Lane',
    'Birch Boulevard',
    'Cherry Street',
    'Willow Way',
    'Magnolia Court'
  ];
  nextActionsMyPending1 = [
    { task: 'Review Documentation' },
    { task: 'Approve Request' },
    { task: 'Follow Up with Client' },
    { task: 'Schedule Meeting' },
    { task: 'Complete Report' },
    { task: 'Update Status' },
    { task: 'Verify Information' }
  ];
  assignToOptions = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Bob Brown',
    'Charlie Davis',
    'Diana Green'
  ];
  
}
