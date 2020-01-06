import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  client = environment.Clients

  constructor(private http: HttpClient) { }

  createClient(data){
    return this.http.post(`${this.client}`,data)
  }

  getAllClients(){
    return this.http.get(`${this.client}`)
  }
}
