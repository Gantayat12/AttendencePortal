import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  currentval="";
  p="";
  getVal(val: string,val1: string)
  {
    //console.warn(val)
    //console.warn(val1)
    //this.currentval=val
    //this.currentval1=val1
    if(val=="admin" && val1=="giet")
    {
      this.router.navigateByUrl('/attendance');
    }
    else if(val=="18cse121" && val1=="giet")
    {
      this.router.navigateByUrl('/student');
    }
    
    else{
      this.router.navigateByUrl('/');
      this.currentval="Invalid Email or Password";
      this.p="danger";
      
    }

  }
}
