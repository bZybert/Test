import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_services/api.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-usersList',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.css']
})
export class UsersListComponent implements OnInit {
users: any;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.usersList();
  }

  usersList() {
    this.apiService.getUsers().subscribe(response => { this.users = response ; }, error => {
      console.log(error) ;
    });
}

}
