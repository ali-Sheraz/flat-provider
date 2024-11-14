import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';

declare const $: any;
type AOA = any[][];
@Component({
  selector: 'app-tempate-upload-workflows',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './tempate-upload-workflows.component.html',
  styleUrls: ['./tempate-upload-workflows.component.css']
})
export class TempateUploadWorkflowsComponent implements OnInit {
  uploadFile = false;
  Results = '';
  excelData: AOA = [[1, 2], [3, 4]];
  showSuccessMsg = false;
  showErrorMsg = false;
  PropertyAdded = '';



  
  constructor() { }

  ngOnInit() {
  }

  DownloadTemplate() {
    window.open("https://workordersfiles920.s3.amazonaws.com/General/TemplateUploads/WorkflowsTemplate.xlsx");
  }

 

}
