import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  project = environment.Projects
  constructor(private http: HttpClient) { }

  createProject(data){
    return this.http.post(`${this.project}`,data)
  }

}
