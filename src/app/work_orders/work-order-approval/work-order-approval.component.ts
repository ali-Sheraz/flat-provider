import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TicketsLocalService } from 'src/app/services/tickets_local.service';
import { API } from 'aws-amplify';
import { LoaderService } from 'src/app/loader/loader.service';



@Component({
  selector: 'app-work-order-approval',
  templateUrl: './work-order-approval.component.html',
  styleUrls: ['./work-order-approval.component.css']
})

export class WorkOrderApprovalComponent implements OnInit {

  rows = [];
  srch = [];
  viewT: any = [];

  public pdAdminAction = [];
  public pdSupervisorActions = [];
  public conAdminActions = [];
  public conSupervisorActions = [];
  public currentActions = [];

  public malaysiaStates = [];
  public id;
  approvalLog = [];



  apiName = 'workorders'; // replace this with your api name.
  path = '/workorders'; // replace this with the path you have configured on your API
  putMyInit = {
    body: {}, // replace this with attributes you need
    headers: {} // OPTIONAL
  };



  ticketScan = false;
  scanResults = '';


  srchFiltersValues = [];
  srchFiltersNames = [];

  getMyInit = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {  // OPTIONAL
      name: 'param',
    }
  };
  public userLevel: string;
  public superAdminLoggedIn: boolean;

  public nextActionBy;
  public userNickName;
  currentDate: string;
  currentTime: string;

  nextActionSuccess = false;
  nextActionMsg;

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
  putMyInitWOApprovalLog = {
    body: {}, // replace this with attributes you need
    headers: {} // OPTIONAL
  };


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

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private cookieService: CookieService,
    private ticketsService: TicketsLocalService,
    private loader: LoaderService
  ) {

    this.conAdminActions = appService.conAdminActions;
    this.conSupervisorActions = appService.conSupervisorActions;
    this.pdSupervisorActions = appService.pdSupervisorActions;
    this.pdAdminAction = appService.pdAdminActions;

    //this.rows = appService.tickets;
    this.srch = [...this.rows];
    this.userLevel = localStorage.getItem('user_level');
    this.userNickName = localStorage.getItem('nick_name');

  }

  ngOnInit() {
    this.setActions();
    this.currentDate = new Date(Date.now()).toLocaleString().split(',')[0];
    this.currentTime = new Date().toLocaleTimeString('en-GB');
    this.rows = JSON.parse(localStorage.getItem('workOrdersLocalStorage'));
    this.srch = [...this.rows];
    if (this.userLevel == 'Super_admin') {
      this.superAdminLoggedIn = true;
    }
    this.route.queryParams.subscribe(params => {
      // console.log(params);
      this.viewT = [];
      if (params.id) {
        const id = params.id;
        this.id = params.id;
        const arr = this.rows.find(function (item, i) {
          return item.id == id;
        });

        if (!arr) {
          this.router.navigate(['work_orders/my_pending_work_orders']);
        } else {
          this.viewT.push(arr);
          this.viewT = this.viewT[0];
          // console.log(this.viewT);
        }
      } else {
        this.router.navigate(['work_orders/my_pending_work_orders']);
      }


    });

    this.searchRecordApprovalLog();

  }

  setActions() {
    if (this.userLevel === this.con_admin) {
      this.currentActions = this.conAdminActions;
    } else if (this.userLevel === this.con_supervisor) {
      this.currentActions = this.conSupervisorActions;
    } else if (this.userLevel === this.pd_supervisor) {
      this.currentActions = this.pdSupervisorActions;
    } else if (this.userLevel === this.pd_admin) {
      this.currentActions = this.pdAdminAction;
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

  multiFilter(array, filters) {
    // console.log(array);
    // console.log(filters);
    return array.filter(o =>
      Object.keys(filters).every(k =>
        [].concat(filters[k]).some(v => o[k].includes(v))));
  }


  updateTicket(f) {
    // console.log(f.approver_remarks);
    this.loader.show();
    const createTicketBody = {
      created_by: f.created_by,
      id: f.id,
      house_number: f.house_number,
      street: f.street,
      subject: f.subject,
      days_to_execute: f.days_to_execute,
      priority: f.priority,
      floor: f.floor,
      location: f.location,
      element: f.element,
      defect: f.defect,
      cause: f.cause,
      ampm: f.ampm,
      days_open: f.days_open,
      next_action: f.next_action,
      next_action_by: this.getNextActionBy(f.next_action),
      main_contractor: f.main_contractor,
      date_scheduled: f.date_scheduled,
      time_scheduled: f.time_scheduled,
      costs: f.costs,
      invoice: f.invoice,
      charge_to: f.charge_to,
      created_date: f.created_date,
      description: f.description,
      status: f.next_action,
      closed_by: this.userNickName,
      date_closed: this.currentDate,
      time_closed: this.currentTime,
    };

    if ((this.getNextActionBy(f.next_action)) != 'Closed') {
      delete createTicketBody.closed_by;
      delete createTicketBody.date_closed;
      delete createTicketBody.time_closed;
    }

    this.putMyInit.body = createTicketBody;
    API.put(this.apiName, this.path, this.putMyInit).then(response => {
      console.log('\'work-order-approval\' component-> Next Action Performed Successfully Successfully!');
      console.log(response);
      this.addApprovalLog(f.id, this.currentDate, this.currentTime, this.userNickName, f.next_action, f.approver_remarks);
    }).catch(error => {
      this.nextActionMsg = 'Failed to Perform, Please Try Again';
      console.log('\'work-order-approval\' component-> Error in Performing next action!');
      console.log(error);
      this.loader.hide();
    });
  }

  addApprovalLog(ticketID, created_date, created_time, created_by, action, remarks) {
    const randomnumber = Math.floor(Math.random() * 99999999);
    const id = 'AL-' + randomnumber;

    const approvalLogBody = {
      id: id,
      parentTicketId: ticketID,
      created_date: created_date,
      created_time: created_time,
      created_by: created_by,
      action: action,
      remarks: remarks
    };
    this.putMyInitWOApprovalLog.body = approvalLogBody;

    API.put(this.apiNameWOApprovalLog, this.pathWOApprovalLog, this.putMyInitWOApprovalLog).then(response => {
      this.nextActionSuccess = true;
      this.nextActionMsg = 'Performed Successfully!';
      this.approvalLog.push(approvalLogBody);

      console.log('\'work-order-approval\' component-> Approval Log Recorded Successfully!');
      console.log(response);
      this.loader.hide();
    }).catch(error => {
      this.nextActionSuccess = true;
      this.nextActionMsg = 'Failed to Perform, Please Try Again';
      console.log('\'work-order-approval\' component-> Error in  Recording Approval Log!');
      console.log(error);
      this.loader.hide();
    });

  }

  getNextActionBy(next_action) {

    // next Actions for PD Supervisor
    if (next_action === 'Schedule appointment' || next_action === 'Appoint 3rd party' || next_action === 'Approved') {
      return this.pd_admin;
    } else if (next_action === 'Inspection PD SV') {
      return this.pd_supervisor;
    } else if (next_action === 'Execute' || next_action === 'Rejected') {
      return this.con_admin;
    } else if (next_action === 'Closed') {
      return 'Closed';
    } else if (next_action === 'Inspection PD SV' || next_action === 'Joint Inspection PD SV') {
      return this.pd_supervisor;
    } else if (next_action === 'Inspection') {
      return this.con_supervisor;
    } else if (next_action === 'Pending Materials' || next_action === 'In Progress') {
      return this.con_admin;
    } else if (next_action === 'Rejected') {
      return this.con_admin;
    } else if (next_action === 'Inspection PD SV' || next_action === 'Joint Inspection PD SV') {
      return this.pd_supervisor;
    } else if (next_action === 'Inspection' || next_action === 'WO Question') {
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

  ngOnDestroy() {
  }


}


