import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {IssueService} from '../../issue.service'
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {DefaultService} from '../../default service/default.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private issueService: IssueService,
    private fb: FormBuilder,
     private router: Router,
     private defaultservic: DefaultService
  ) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      responsible: '',
      description: '',
      severity: ''
    });
   }
   addIssue(title, responsible, description, severity) {

    console.log("1-1-1-1-1-1->>>",title, responsible, description, severity);
   let obj = new Object()
     obj={
title:title,
responsible:responsible,
description:description,
severity:severity,
    }
    this.issueService.addIssue(obj).subscribe((data) => {
      console.log("fghfghfghfhg",data);
if(data['issue']=='Added successfully'){
this.defaultservic.openSnackBar('Issue Added Successfully',true)
}
else{
  this.defaultservic.openSnackBar('Something Went Wrong',false)
}


      this.router.navigate(['/list']);
    });
  }



  ngOnInit() {
  }




  
}
