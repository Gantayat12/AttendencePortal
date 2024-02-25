import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public data : any;
  name:any;
  constructor(private user:UserServiceService) { }

  ngOnInit(): void {
    this.user.getdata().subscribe(data=>{
      console.log(data);
      this.data=data['msg'];
    })

  } 
  Search()
  {
    if(this.name=="")
    {
      this.ngOnInit();
    }else{
    this.data=this.data.filter((res: { name: string; })=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}
  
}
