import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-userForm',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})
export class UserFormComponent implements OnInit {
model: any = {};

constructor(private apiService: ApiService) { }
ngOnInit() {
}

register() {
this.apiService.register(this.model).subscribe(() => {
  console.log('registration: success');
}, error => {
  console.log(error);
});

}}
