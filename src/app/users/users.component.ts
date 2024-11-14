import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
declare const $: any;
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DataTablesModule, HeaderComponent, SidebarComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  users_user_title = "Users";
  totalList: any;

  showSuccessMsg = false;
  userAdded = '';
  scan: boolean = false;
  scanResults = '';
  passwordsMismatch = false;
  showErrorMsg = false;
  addUserValidation = false;
  showMsgUpdate = false;
  userUpdated = '';

  generals_search = 'Search';
  generals_clear_search = 'Clear Search';

  permissions_userlevel: any;
  permissions_view = false;
  permissions_create = false;
  permissions_edit = false;
  permissions_delete = false;

  users_full_name = "Full Name";
  users_nickname = "Nickname";
  users_company_name = "Contractor Name";
  public AllContractors = [];
  public AllContractorsList = [];
  users_user_level = "User Level";
  users_property_developer = "Client";
  public AllPd = [];
  public AllPdList = [];
  users_prefered_language = "Preferred Language";
  generals_actions = 'Actions';
  searchT: any = [];
  public rows = [
    {
      status: 'Confirmed',
      user_name: 'john_doe',
      nickname: 'John',
      full_name: 'John Doe',
      telephone: '123-456-7890',
      email: 'john.doe@example.com',
      company_name: 'Company A',
      property_developer: 'ProperLy',
      designation: 'Developer',
      user_level: 'Admin'
    },
    {
      status: 'Unconfirmed',
      user_name: 'jane_doe',
      nickname: 'Jane',
      full_name: 'Jane Doe',
      telephone: '098-765-4321',
      email: 'jane.doe@example.com',
      company_name: 'Company B',
      property_developer: 'Developer1',
      designation: 'Manager',
      user_level: 'Editor'
    }
    // Add more static data as needed
  ];

  totalUsersList = [];
  users_username = "Username";
  users_email = "Email";

  users_telephone = "Telephone";
  users_designation = "Designation";
  users_status = "Status";
  public selectedUserLevel!: string;

  public isDropdownOpen: boolean = false; // Add this property
  profile_pic: any;
  delete_results="Deleted";
  public addU: any = {};
  typeofunitload: Boolean = false;
  public genderOptions = [];
  public user_level_list = [];
  public currentDate!: string;
  selectedPics!: FileList;
  eventPics: any;
  havePictures: boolean = false;
  uploadPicsFolder = '/General/UsersProfile';
  users_add_user = "Add User";
  public userlevels = [];
  public userLevel!: string;
  public superAdminLoggedIn!: boolean;

  generals_edit = 'Edit'
  public uptU: any = [];
  public editU: any = [];

  generals_delete = 'Delete';

  public languages = [];

  users_user_id = "User ID";

  users_password = "Password";
  users_confirm_password = "Confirm Password";
  users_gender = "Gender";
  users_upload_picture = "Upload Picture";
  users_create_user = "Create User";
  users_update_user = "Update User";
  users_edit_user = "Edit User";
  users_company_type = "Company Type";
  users_date_of_birth = "Date of Birth";
  generals_view_details = 'View Details';
  generals_uploaded_images = 'Uploaded Images';

  generals_creation_date = 'Creation Date';

  apiNameContractors = 'contractors';
  apiPathContractors = '/contractors';

  public viewU: any = {
    id: 1,
    user_name: 'john_doe',
    full_name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    gender: 'Male',
    user_level: 'Admin',
    property_developer: 'ProperLy',
    company_type: 'Type A',
    company_name: 'Company A',
    telephone: '123-456-7890',
    designation: 'Developer',
    language: 'English',
    status: 'Confirmed',
    nickname: 'John',
    date_of_birth: '1990-01-01',
    date_created: '2024-01-01',
    profile_pic: 'path/to/profile_pic.jpg' // Example path
  };
  deleteID!: string;

  ngOnInit() {
    // Initialization logic here
  }
  ngOnDestroy() {
    $('#add_user').modal('hide');
    $('#edit_user').modal('hide');
    $('#view_user').modal('hide');
  }
  addReset() {
    $('#add_user').modal('show');
  }
  onEdit(item: any) {
    this.editU = Object.assign({}, item);
    $('#edit_user').modal('show');
    console.log(this.uptU)
  }
  view() {
    $('#view_user').modal('show');
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
}
