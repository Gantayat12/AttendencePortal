import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {UserServiceService} from '../user-service.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  alert: Boolean=false;
  createstudent=new FormGroup({
    name: new FormControl(''),
    regno: new FormControl(''),
    rollno: new FormControl(''),
    semister: new FormControl('')
  })
  router: any;
  constructor(private add:UserServiceService) { }

  ngOnInit(): void {
  }
  addstudent()
  {
    this.add.createstudent(this.createstudent.value).subscribe((result)=>{
      this.alert=true;
      this.createstudent.reset({});
      this.router.navigateByUrl('/sheet');
    })
  }
}
