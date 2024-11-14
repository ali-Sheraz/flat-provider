import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
declare const $: any;

@Component({
  selector: 'app-residents-documents-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './residents-documents-list.component.html',
  styleUrls: ['./residents-documents-list.component.css']
})
export class ResidentsDocumentsListComponent implements OnInit {
  ///////////alert variables////////
  scanResults = '';
  scan: boolean = false;

  /////////total list variable//////
  totalList: any;
  property_id: string | null | undefined;

  //////////////get property developers variables//////
  public PropertyDevelopers = [];
  searchT: any = [];
  documentsList: any;
  rows = [
    {
      creation_date: '2024-08-01',
      id: 'DOC-001',
      created_by: 'Alice Smith',
      property_developer: 'Developer A',
      house_owner: 'John Doe',
      precinct: 'Downtown',
      street: '1st Avenue',
      house_number: '101',
      type_of_documents: 'Floor Plan',
      status: 'Uploaded'
    },
    {
      creation_date: '2024-08-02',
      id: 'DOC-002',
      created_by: 'Bob Johnson',
      property_developer: 'Developer B',
      house_owner: 'Jane Smith',
      precinct: 'Uptown',
      street: '2nd Avenue',
      house_number: '202',
      type_of_documents: 'Blueprint',
      status: 'Approved'
    },
    {
      creation_date: '2024-08-03',
      id: 'DOC-003',
      created_by: 'Charlie Brown',
      property_developer: 'Developer C',
      house_owner: 'Michael Johnson',
      precinct: 'Midtown',
      street: '3rd Avenue',
      house_number: '303',
      type_of_documents: 'Elevation',
      status: 'Pending'
    },
    {
      creation_date: '2024-08-04',
      id: 'DOC-004',
      created_by: 'Diana Prince',
      property_developer: 'Developer D',
      house_owner: 'Emily Davis',
      precinct: 'Suburb',
      street: '4th Avenue',
      house_number: '404',
      type_of_documents: 'Site Plan',
      status: 'Rejected'
    }
  ];
  public viewP: any = [];

  ///////////pictures/////////
  viewPictures = [];
  albums = [];
  viewFiles = [];
  totalPics: any;
  totalFiles: number | undefined;
  private _lightbox: any;
  value: any;

  ngOnInit() {

  }

  ////////////////get residents functions////////////
 
  ////////////////view image//////
  openImageView(index: number): void {
    this._lightbox.open(this.albums, index);
  }

  ///////////////////view/////////////////
  onView(item: any) {
    this.viewP = item;
    $('#view_modal').modal('show');
  }
}
