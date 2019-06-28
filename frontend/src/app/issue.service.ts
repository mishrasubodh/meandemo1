import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  url = 'http://localhost:4000';

  constructor(private http: HttpClient) { }


  addIssue(issue) {
    return this.http.post(`${this.url}/issues/add`, issue);
  }






  getIssues() {
    return this.http.get(this.url+"/issues");
  }

  getIssueById(id) {
    console.log("11111111111111111>>",id);
    return this.http.get(this.url+"/issues/"+id);
  }

  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.url}/issues/update/${id}`, issue);
  }
  deleteIssue(id) { 
    console.log("sdsdsdsdsdsdsddd==>",id)
    console.log("URL",this.url+"/issues/delete/:"+id);
    return this.http.get(this.url+"/issues/delete/"+id);
  }

}
