import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../../header/header.component';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Router } from '@angular/router';

declare const $:any;

@Component({
  selector: 'app-settingsmain',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './settingsmain.component.html',
  styleUrls: ['./settingsmain.component.css']
})
export class SettingsmainComponent implements OnInit {

  flag: boolean=false;
  constructor(private router: Router) { 
    
    router.events.subscribe((val:any) => {
      this.flag=false;
});

}
  ngOnInit() {
    this.flag=true;
  }
}