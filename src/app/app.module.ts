import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { DataTablesModule } from 'angular-datatables';
import { ProjectComponent } from './properties/project.component';
import { ResidentsDocumentsListComponent } from './residents-documents-list/residents-documents-list.component';
import { VenuesComponent } from './bookings/venues/venues.component';
import { VenuebookingsComponent } from './bookings/venuebookings/venuebookings.component';
import { AllDefectsComponent } from './all-defects/all-defects.component';
import { MyPendingDefectsComponent } from './my-pending-defects/my-pending-defects.component';
import { AddDefectComponent } from './add-defect/add-defect.component';
import { TicketsComponent } from './work_orders/All_work_orders/tickets.component';
import { AddNewWorkOrderComponent } from './work_orders/add-new-work-order/add-new-work-order.component';
import { MyPendingWorkOrdersComponent } from './work_orders/my-pending-work-orders/my-pending-work-orders.component';
import { TypeofunitComponent } from './settings/LED/typeofunit/typeofunit.component';
import { LocationComponent } from './settings/LED/location/location.component';
import { SettingsmainComponent } from './settings/settingsmain/settingsmain.component';
import { ElementComponent } from './settings/LED/element/element.component';
import { MpSuperAdminComponent } from './settings/module_permissions/mp-super-admin/mp-super-admin.component';
import { UserLevelComponent } from './settings/plts_settings/user-level/user-level.component';
import { TaskComponent } from './settings/plts_settings/NextActions/task.component';
import { ActionsComponent } from './settings/plts_settings/workflows/actions.component';
import { PrecinctsComponent } from './settings/generals/precincts/precincts.component';
import { SubPrecinctsComponent } from './settings/generals/sub-precincts/sub-precincts.component';
import { TempateUploadPropertiesComponent } from './settings/tempate-upload-properties/tempate-upload-properties.component';
import { TempateUploadResidentsComponent } from './settings/tempate-upload-residents/tempate-upload-residents.component';
import { TempateUploadWorkordersComponent } from './settings/tempate-upload-workorders/tempate-upload-workorders.component';
import { TempateUploadActionsComponent } from './settings/tempate-upload-actions/tempate-upload-actions.component';
import { TempateUploadUserlevelComponent } from './settings/tempate-upload-userlevel/tempate-upload-userlevel.component';
import { TempateUploadWorkflowsComponent } from './settings/tempate-upload-workflows/tempate-upload-workflows.component';
import { LanguagesComponent } from './settings/languages/languages.component';
import { NgbTabsModule } from '@ng-bootstrap/ng-bootstrap';
import { TabViewModule } from 'primeng/tabview';
import { DefectComponent } from './settings/LED/defect/defect.component';
import { CompetencyComponent } from './settings/LED/competency/competency.component';
import { DaystoexecuteComponent } from './settings/LED/daystoexecute/daystoexecute.component';
import { PriorityComponent } from './settings/LED/priority/priority.component';
import { NextactionComponent } from './settings/LED/nextaction/nextaction.component';
import { CauseComponent } from './settings/LED/cause/cause.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    SidebarComponent,
    UsersComponent,
    ResidentsDocumentsListComponent,
    VenuesComponent,
    VenuebookingsComponent,
    AllDefectsComponent,
    MyPendingDefectsComponent,
    AddDefectComponent,
    TicketsComponent,
    AddNewWorkOrderComponent,
    MyPendingWorkOrdersComponent,
    SettingsmainComponent,
    TypeofunitComponent,
    LocationComponent,
    ElementComponent,
    MpSuperAdminComponent,
    UserLevelComponent,
    TaskComponent,
    ActionsComponent,
    PrecinctsComponent,
    SubPrecinctsComponent,
    TempateUploadPropertiesComponent,
    TempateUploadResidentsComponent,
    TempateUploadWorkordersComponent,
    TempateUploadActionsComponent,
    TempateUploadUserlevelComponent,
    TempateUploadWorkflowsComponent,
    LanguagesComponent,
    DefectComponent,
    CompetencyComponent,
    DaystoexecuteComponent,
    PriorityComponent,
    NextactionComponent,
    CauseComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add AppRoutingModule here
    NgSlimScrollModule,
    CommonModule,
    DataTablesModule,
    MatTabsModule,
    NgbTabsModule,
    TabViewModule,
    
    // other modules
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
