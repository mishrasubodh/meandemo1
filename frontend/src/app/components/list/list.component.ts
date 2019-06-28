
import {IssueService} from '../../issue.service'
import {Issue} from '../../issue.model'
 import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import {Component} from '@angular/core';
import {DefaultService} from '../../default service/default.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  issues:any;
  displayedColumns: string[] = ['title', 'responsible', 'severity', 'status', 'actions'];
  dataSource1 ;
  constructor(
        private issueService: IssueService,
        private router: Router,
        private defaultservice:DefaultService
  ){
    this.fetchIssues();
  }

    fetchIssues() {
    this.issueService
    .getIssues()
    .subscribe((data: Issue[]) => {
      this.dataSource1 = data;
      console.log('Data requested ...',this.dataSource1);
      console.log(this.issues,'))))))))))');
    });
  }

  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }
  deleteIssue(id) {
    console.log("asasasaasaassasas",id);
    this.issueService.deleteIssue(id).subscribe((data) => {
      console.log("abcd",data);

      if(data =='Removed successfully'){
    this.defaultservice.openSnackBar('Issue Removed Succesfuly',true);
    this.fetchIssues();
      }
      else{
        this.defaultservice.openSnackBar('something went rong',false);
      }
     
    });
  }


}


