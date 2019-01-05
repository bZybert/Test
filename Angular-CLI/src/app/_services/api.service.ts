import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUrl = 'https://localhost:6001/api/users';

constructor(private http: HttpClient) { }

register(model: any) {
  return this.http.post(this.baseUrl, model);
  }

  getUsers() {
    return this.http.get(this.baseUrl);
}}
