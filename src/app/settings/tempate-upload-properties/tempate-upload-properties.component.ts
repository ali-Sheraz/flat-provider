import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import * as XLSX from 'xlsx';
declare const $: any;
type AOA = any[][];

@Component({
  selector: 'app-tempate-upload-properties',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './tempate-upload-properties.component.html',
  styleUrls: ['./tempate-upload-properties.component.css']
})
export class TempateUploadPropertiesComponent implements OnInit {

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
    window.open("https://workordersfiles920.s3.amazonaws.com/General/TemplateUploads/propertiesTemplate.xlsx");
  }

  onFileUpload(evt: any) {
    this.showErrorMsg=false;
    this.uploadFile = false;
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) {
      this.showErrorMsg = true;
      this.Results = "Sorry Cannot use multiple files. Please Contact Customer Support";
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.excelData = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.excelData);

      if(this.excelData.length>=2){
      if (this.excelData[1].length == 25) {
        this.uploadFile = true;
        this.Results = "File Uploaded Successfully! Please Press Submit To Upload.";
       // this.asynccalltoupload(this.excelData);
      }else{
        this.showErrorMsg = true;
        this.Results = "Sorry Wrong Format of the file. Please Contact Customer Support";
      }
    } else {
        this.showErrorMsg = true;
        this.Results = "Sorry Wrong Format of the file. Please Contact Customer Support";
      }
    };
    reader.readAsBinaryString(target.files[0]);
  }

  async asynccalltoupload(excelData: string | any[]) {
    for (var i = 2; i < excelData.length; i++) {
      await new Promise<void>(resolve => {
        this.addPropertiesFromFile(excelData[i][0], excelData[i][1], excelData[i][2],
          excelData[i][3], excelData[i][4], excelData[i][5],
          excelData[i][6], excelData[i][7], excelData[i][8],
          excelData[i][9], excelData[i][10], excelData[i][11],
          excelData[i][12], excelData[i][13], excelData[i][14], excelData[i][15],
          excelData[i][16], excelData[i][17], excelData[i][18], excelData[i][19],
          excelData[i][20], excelData[i][21], excelData[i][22],excelData[i][23],excelData[i][24], i
        ).then(() => {
          console.log('This is iteration ' + i);
          resolve();
        }).catch((error: any) => {
          console.log(error);
        });
      });
    }
    this.Results = "Completed. Please Go to Properties Module to view your Uploaded Properties.";
  }
  submit(){
    this.Results='Under Progress, Please Wait.'
    this.asynccalltoupload(this.excelData);
  }
  addPropertiesFromFile(id: any, address: any, house_owner: any, construction_no: string, house_number: any, street: any, type_of_unit: any, precinct: any, sub_precinct: any, township: any, city: any, postal_code: any, state: any, country: any, property_developer: any, main_contractor: any, latitude: string, longitude: string, type_of_contract: any, contract_start_date: string, contract_end_date: string, remarks: any, floor_plan_id: any,floor_plan_id_p: any, creation_date: any, i: number): any {
    const createPropertyBody = {
      id: id,
      house_owner: house_owner,
      street: street,
      address: address,
      contract_start_date: contract_start_date,
      contract_end_date: contract_end_date,
      house_number: house_number,
      type_of_contract: type_of_contract,
      type_of_unit: type_of_unit,
      precinct: precinct,
      creation_date: creation_date,
      sub_precinct: sub_precinct,
      township: township,
      city: city,
      postal_code: postal_code,
      state: state,
      country: country,
      construction_no: construction_no,
      main_contractor: main_contractor,
      property_developer: property_developer,
      latitude: latitude,
      longitude: longitude,
      remarks: remarks,
      floor_plan_id:floor_plan_id,
      floor_plan_id_p:floor_plan_id_p
    };
  }
}
