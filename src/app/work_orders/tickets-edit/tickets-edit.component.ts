import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import {IMyDpOptions} from 'mydatepicker';
import { CookieService } from 'ngx-cookie-service';
import { LoaderService } from 'src/app/loader/loader.service';
import { TicketsLocalService } from 'src/app/services/tickets_local.service';
import { propertiesIDsLocalService } from 'src/app/services/propertiesIDsLocal.service';
import { API } from 'aws-amplify';

declare const $: any;

@Component({
  selector: 'app-tickets-edit',
  templateUrl: './tickets-edit.component.html',
  styleUrls: ['./tickets-edit.component.css']
})
export class TicketsEditComponent implements OnInit {

  public myDatePickerOptions1: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd/mm/yyyy',
    firstDayOfWeek: 'su',
    sunHighlight: true,
    inline: false,
    height: '48px'
  };
  showSuccessMsg = false;
  showErrorMsg = false;

  currentDate: string;
  currentTime: string;
  public userLevel;
  public userNickName;

  nextActionSuccess = false;
  nextActionMsg;

  ticketScan = false;
  scanResults = '';

  addWorkOrderValidation = false;
  addWorkOrderFlag = false;
  TicketSubmitted = '';

  public timeList = [];
  public propertiesHouseNumberList = [];
  public propertiesStreetsList = [];

  public submitterActions = [];

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

  apiName = 'workorders'; // replace this with your api name.
  path = '/workorders'; // replace this with the path you have configured on your API

  approvalLog = [];
  srchFiltersValues = [];
  srchFiltersNames = [];

  putMyInit = {
    body: {}, // replace this with attributes you need
    headers: {} // OPTIONAL
  };

  getMyInit = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {  // OPTIONAL
      name: 'param',
    }
  };

  apiNameProperties = 'properties'; // replace this with your api name.
  apiPathProperties = '/properties'; // replace this with the path you have configured on your API

  getPropertiessInit = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {  // OPTIONAL
      name: 'param'
    }
  };

  apiNameWOApprovalLog = 'woapprovallog'; // replace this with your api name.
  pathWOApprovalLog = '/woapprovallog'; // replace this with the path you have configured on your API
  getWOApprovalLogInit = {
    headers: {},
    body: {
      FilterExpression: '',
      ExpressionAttributeNames: {
      },
      ExpressionAttributeValues: {
      }
    }
  };
  putWOApprovalLogInit = {
    body: {},
    headers: {}
  };

  rows = [];
  srch = [];
  editT: any = [];
  public id;

  public superAdminLoggedIn: boolean;


  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private cookieService: CookieService,
       private ticketsService: TicketsLocalService,
       private propertiesIDsService: propertiesIDsLocalService,
       private loader: LoaderService
    ) {

      this.submitterActions = appService.pdAdminActions;
      this.timeList = appService.timeList;
      this.userLevel = localStorage.getItem('user_level');
      this.userNickName = localStorage.getItem('nick_name');

  }

  ngOnInit() {
    this.rows = JSON.parse(localStorage.getItem('workOrdersLocalStorage'));
    this.propertiesHouseNumberList = JSON.parse(localStorage.getItem('propertiesHouseNumberList'));
    this.propertiesStreetsList = JSON.parse(localStorage.getItem('propertiesStreetsList'));

    this.currentDate = new Date(Date.now()).toLocaleString().split(',')[0];
    this.currentTime = new Date().toLocaleTimeString('en-GB');
    this.srch = [...this.rows];

    this.userLevel = localStorage.getItem('user_level');
    if (this.userLevel == 'Super_admin') {
      this.superAdminLoggedIn = true;
    }


    this.route.queryParams.subscribe(params => {
      console.log('id=' + params.id);
      this.id = params.id;
      this.editT = [];
      if (params.id) {
        const id = params.id;
        this.id = params.id;
        const arr = this.rows.find(function (item, i) {
          return item.id == id;
        });

        if (!arr) {
          console.log('no work order found locally by service');
          console.log(arr);
          this.router.navigate(['work_orders/all_work_orders']);
        } else {
          this.editT.push(arr);
          this.editT = this.editT[0];
          console.log(this.editT);
        }
      } else {
        console.log('no id in parameter of work order');
        this.router.navigate(['work_orders/all_work_orders']);
      }
    });
    this.searchRecordApprovalLog();

  }

  updateApprovalLog(approval: any) {
    console.log(approval);
    this.addApprovalLog(approval.id, approval.parentTicketId, approval.created_date, approval.created_time, approval.created_by, approval.action, approval.remarks);
  }

  updateTicket(f) {
    const date_scheduled = f.form.get('date_scheduled').value;
    let date_scheduled_formatted = '';
    if (date_scheduled) {
      date_scheduled_formatted = date_scheduled.formatted;
    }
    if (f.invalid === true) {
      this.addWorkOrderValidation = true;
    } else {
      this.loader.show();
      const createTicketBody = {
        created_by: f.form.get('created_by').value,
        id: f.form.get('id').value.toString(),
        house_number: f.form.get('house_number').value,
        street: f.form.get('street').value,
        subject: f.form.get('subject').value,
        days_to_execute: f.form.get('days_to_execute').value,
        priority: f.form.get('priority').value,
        floor: f.form.get('floor').value,
        location: f.form.get('location').value,
        element: f.form.get('element').value,
        defect: f.form.get('defect').value,
        cause: f.form.get('cause').value,
        costs: f.form.get('costs').value,
        ampm: f.form.get('ampm').value,
        days_open: f.form.get('days_open').value,
        next_action: f.form.get('next_action').value,
        next_action_by: this.getNextActionBy(f.form.get('next_action').value),
        main_contractor: f.form.get('main_contractor').value,
        date_scheduled: date_scheduled_formatted,
        time_scheduled: f.form.get('time_scheduled').value,
        invoice: f.form.get('invoice').value,
        charge_to: f.form.get('charge_to').value,
        created_date: this.currentDate,
        description: f.form.get('description').value,
        status: f.form.get('next_action').value,
        closed_by: this.userNickName,
        date_closed: this.currentDate,
        time_closed: this.currentTime,
      };

      if (f.form.get('costs').value === '') {
        delete createTicketBody.costs;
      }
      if (f.form.get('invoice').value === '') {
        delete createTicketBody.invoice;
      }
      if (f.form.get('charge_to').value === '') {
        delete createTicketBody.charge_to;
      }
      if (date_scheduled) {
      } else {
        delete createTicketBody.date_scheduled;
      }
      if (f.form.get('time_scheduled').value === '') {
        delete createTicketBody.time_scheduled;
      }
      if (f.form.get('ampm').value === '') {
        delete createTicketBody.ampm;
      }
      if ((this.getNextActionBy(f.form.get('next_action').value)) != 'Closed') {
        delete createTicketBody.closed_by;
        delete createTicketBody.date_closed;
        delete createTicketBody.time_closed;
      }


      this.putMyInit.body = createTicketBody;
      API.put(this.apiName, this.path, this.putMyInit).then(response => {
        this.showSuccessMsg = true;
        this.TicketSubmitted = 'Work order Updated Successfully!';
        f.form.value.status = f.form.get('next_action').value;
        f.form.value.created_date = this.currentDate;
        f.form.value.date_scheduled = date_scheduled_formatted;
        f.form.value.closed_by = this.userNickName;
        this.rows.unshift(f.form.value);
        this.srch.unshift(f.form.value);
        this.rows = this.rows;
        $('#add_ticket').modal('hide');
        console.log('\'tickets\' component-> New Ticket Created Successfully!');
        console.log(response);
        this.loader.hide();
      }).catch(error => {
        this.showErrorMsg = true;
        this.TicketSubmitted = 'Work Order Updation Failed, Please Retry!';
        console.log('\'tickets\' component-> Error in creating new Ticket!');
        console.log(error.response);
        this.loader.hide();
      });
    }

  }


  getNextActionBy(next_action) {

    if (next_action === 'Inspection' || next_action === 'WO Question') {
      return this.pd_supervisor;
    } else if (next_action === 'Execute') {
      return this.con_admin;
    } else if (next_action === 'On hold' || next_action === 'Temp closed') {
      return this.pd_admin;
    } else if (next_action === 'Closed') {
      return 'Closed';
    } else if (next_action === 'Schedule appointment') {
      return this.pd_admin;
    } else {
      return '';
    }
  }

  searchRecordApprovalLog() {

    const parentTicketId = this.id;
   console.log(this.id);

    if (parentTicketId != undefined) {
      this.srchFiltersNames.push('parentTicketId');
      this.srchFiltersValues.push(parentTicketId);
    }


    let FilterExpression = '';
    for (let i = 0; i < this.srchFiltersNames.length; i++) {
      FilterExpression += 'contains ' + '(#' + this.srchFiltersNames[i] + ' , ' + ':' + this.srchFiltersNames[i] + ')';
      if (i != this.srchFiltersNames.length - 1) {
        FilterExpression += ' and ';
      }
    }
    console.log(FilterExpression);


    const ExpressionAttributeNames = {};
    for (let i = 0; i < this.srchFiltersNames.length; i++) {
      ExpressionAttributeNames['#' + this.srchFiltersNames[i]] = this.srchFiltersNames[i];
    }
    console.log(ExpressionAttributeNames);


    const ExpressionAttributeValues = {};
    for (let i = 0; i < this.srchFiltersNames.length; i++) {
      ExpressionAttributeValues[':' + this.srchFiltersNames[i]] = this.srchFiltersValues[i];
    }
    console.log(ExpressionAttributeValues);

      this.getWOApprovalLogInit.body.FilterExpression = FilterExpression;
      this.getWOApprovalLogInit.body.ExpressionAttributeNames = ExpressionAttributeNames;
      this.getWOApprovalLogInit.body.ExpressionAttributeValues = ExpressionAttributeValues;
      this.scanApprovalLog();

  }

  scanApprovalLog() {
    this.ticketScan = true;
    this.scanResults = 'In Progress...';
    this.getApprovalLog(this.apiNameWOApprovalLog, this.pathWOApprovalLog, this.getWOApprovalLogInit).then(response => {
      this.approvalLog.push(...response.Items);
      if (typeof response.LastEvaluatedKey != 'undefined') {
        this.getWOApprovalLogInit.body['ExclusiveStartKey'] = response.LastEvaluatedKey;
        this.scanApprovalLog();
      } else {
        this.scanResults = 'Completed';
        delete this.getWOApprovalLogInit.body['ExclusiveStartKey'];
        console.log(this.approvalLog);
        return;
      }
    }).catch(error => {
      console.log(error);
      this.scanResults = 'Sorry Some Error Occured While Scanning, Please Try again ';
    });
  }

  getApprovalLog(apiName, apiPath, getMyInt): any {
    return new Promise<string>((resolve, reject) => {
      API.post(apiName, apiPath, getMyInt).then(response => {
        console.log('\'tickets-details\' component->  Approval Log Retrieved Successfully!');
        console.log(response);
        resolve(response);
      }).catch(error => {
        this.loader.hide();
        console.log('\'tickets-details\' component-> Error in Retreiving Approval Log from server!');
        console.log(error.response);
        reject(error.response);
      });

    });
  }

  addApprovalLog(id, ticketID, created_date, created_time, created_by, action, remarks) {

    this.loader.show();
    const approvalLogBody = {
      id: id,
      parentTicketId: ticketID,
      created_date: created_date,
      created_time: created_time,
      created_by: created_by,
      action: action,
      remarks: remarks
    };
    this.putWOApprovalLogInit.body = approvalLogBody;

    API.put(this.apiNameWOApprovalLog, this.pathWOApprovalLog, this.putWOApprovalLogInit).then(response => {
      this.nextActionSuccess = true;
      this.nextActionMsg = 'Performed Successfully!';

      console.log('\'work-order-edit\' component-> Approval Log Recorded Successfully!');
      console.log(response);
      this.loader.hide();
    }).catch(error => {
      this.nextActionSuccess = true;
      this.nextActionMsg = 'Failed to Perform, Please Try Again';
      console.log('\'work-order-edit\' component-> Error in  Recording Approval Log!');
      console.log(error);
      this.loader.hide();
    });
  }
  ngOnDestroy() {
  }


}
