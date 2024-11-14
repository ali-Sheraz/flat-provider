import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgModule } from '@angular/core';
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
import { SettingsmainComponent } from './settings/settingsmain/settingsmain.component';
import { TypeofunitComponent } from './settings/LED/typeofunit/typeofunit.component';
import { LocationComponent } from './settings/LED/location/location.component';
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
import { TempateUploadWorkflowsComponent } from './settings/tempate-upload-workflows/tempate-upload-workflows.component';
import { TempateUploadUserlevelComponent } from './settings/tempate-upload-userlevel/tempate-upload-userlevel.component';
import { DefectComponent } from './settings/LED/defect/defect.component';
import { CompetencyComponent } from './settings/LED/competency/competency.component';
import { DaystoexecuteComponent } from './settings/LED/daystoexecute/daystoexecute.component';
import { PriorityComponent } from './settings/LED/priority/priority.component';
import { NextactionComponent } from './settings/LED/nextaction/nextaction.component';
import { CauseComponent } from './settings/LED/cause/cause.component';




export const routes: Routes = [
    {
        path: 'settings', component: SettingsmainComponent, children: [
        //   { path: '', redirectTo: '/settings', pathMatch: 'full' },
          { path: 'LED/type-of-unit', component: TypeofunitComponent},
          { path: 'LED/location', component: LocationComponent},
          { path: 'LED/element', component: ElementComponent},
          { path: 'LED/defect', component: DefectComponent},
          { path: 'LED/competency', component: CompetencyComponent},
          { path: 'LED/days-to-execute', component: DaystoexecuteComponent}, 
          { path: 'LED/priority', component: PriorityComponent},
          { path: 'LED/next-action', component: NextactionComponent},
          { path: 'LED/cause', component: CauseComponent},
          { path: 'module_permissions', component: MpSuperAdminComponent },
          { path: 'generals/precincts', component: PrecinctsComponent },
          { path: 'generals/sub_precincts', component: SubPrecinctsComponent},
          { path: 'templateUpload/properties', component: TempateUploadPropertiesComponent },
          { path: 'templateUpload/Residents', component: TempateUploadResidentsComponent}, 
          { path: 'templateUpload/workorders', component: TempateUploadWorkordersComponent},
          { path: 'templateUpload/actions', component: TempateUploadActionsComponent },
          { path: 'templateUpload/userlevels', component: TempateUploadUserlevelComponent},
          { path: 'templateUpload/workflows', component: TempateUploadWorkflowsComponent},
        //   { path: 'languages', component: LanguagesComponent},
          { path: 'task', component: TaskComponent},
          { path: 'user-level', component: UserLevelComponent},
          { path: 'actions', component: ActionsComponent},
        ]
      },
    { path: "header", component: HeaderComponent },
    { path: 'welcome', component: WelcomeComponent},
    { path: 'sidebar', component: SidebarComponent},
    { path: 'users', component: UsersComponent},
    { path: 'properties', component: ProjectComponent},
    { path: 'properties/uploaded-documents', component: ResidentsDocumentsListComponent},
    { path: 'bookings/venues', component: VenuesComponent },
    { path: 'bookings/venuebookings', component: VenuebookingsComponent },
    { path: 'all-defects', component: AllDefectsComponent},
    { path: 'my-pending-defects', component: MyPendingDefectsComponent},
    { path: 'add-defect', component: AddDefectComponent},
    { path: 'work_orders/all_work_orders', component: TicketsComponent },
    { path: 'work_orders/submit_work_order', component: AddNewWorkOrderComponent },
    { path: 'work_orders/my_pending_work_orders', component: MyPendingWorkOrdersComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppModule { }

