import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private httpClient:HttpClient) { }

  getData() {
    return this.httpClient.get(environment.apiUrl + '/players');
  }

  insertData(data:any) {
    return this.httpClient.post(environment.apiUrl + '/player/add', data);
  }

  getDataById(id:any) {
    return this.httpClient.get(environment.apiUrl + '/player/' + id);
  }

  updateData(id:any, data:any) {
    return this.httpClient.put(environment.apiUrl + '/player/edit/' + id, data);
  }

  deleteData(id:any) {
    return this.httpClient.delete(environment.apiUrl + '/player/' + id);
  }

  ppgData() {
    return this.httpClient.get(environment.apiUrl + '/get-ppg/');
  }

  rpgData() {
    return this.httpClient.get(environment.apiUrl + '/get-rpg/');
  }

  apgData() {
    return this.httpClient.get(environment.apiUrl + '/get-apg/');
  }

  salaryData() {
    return this.httpClient.get(environment.apiUrl + '/get-salary/');
  }

  jerseyData() {
    return this.httpClient.get(environment.apiUrl + '/get-jerseynumber/');
  }
}
