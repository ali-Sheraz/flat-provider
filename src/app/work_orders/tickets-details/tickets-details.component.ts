import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TicketsLocalService } from 'src/app/services/tickets_local.service';
import { LoaderService } from 'src/app/loader/loader.service';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-tickets-details',
  templateUrl: './tickets-details.component.html',
  styleUrls: ['./tickets-details.component.css']
})
export class TicketsDetailsComponent implements OnInit {

  rows = [];
  srch = [];
  viewT: any = [];

  approvalLog = [];
  public id;


  ticketScan = false;
  scanResults = '';

  public userLevel: string;
  public superAdminLoggedIn: boolean;

  srchFiltersValues = [];
  srchFiltersNames = [];

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

  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private cookieService: CookieService,
    private ticketsService: TicketsLocalService,
    private loader: LoaderService,

  ) {

  }


  ngOnInit() {
    // this.ticketsService.currentMessage.subscribe(temp => this.rows = temp);
    this.rows = JSON.parse(localStorage.getItem('workOrdersLocalStorage'));

    this.srch = [...this.rows];
    this.userLevel = localStorage.getItem('user_level');
    if (this.userLevel == 'Super_admin') {
      this.superAdminLoggedIn = true;
    }
    this.route.queryParams.subscribe(params => {
      console.log('id=' + params.id);
      this.viewT = [];
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
          this.viewT.push(arr);
          this.viewT = this.viewT[0];
          console.log(this.viewT);
        }
      } else {
        console.log('no id in parameter of work order');
        this.router.navigate(['work_orders/all_work_orders']);
      }
    });

    this.searchRecordApprovalLog();
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

  ngOnDestroy() {
  }

}
