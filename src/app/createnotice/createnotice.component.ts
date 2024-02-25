import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {UserServiceService} from '../user-service.service';
@Component({
  selector: 'app-createnotice',
  templateUrl: './createnotice.component.html',
  styleUrls: ['./createnotice.component.css']
})
export class CreatenoticeComponent implements OnInit {
  alert: Boolean=false;
  createnotice=new FormGroup({
    dt: new FormControl(''),
    notice: new FormControl('')
  })
  constructor(private add:UserServiceService) { }

  ngOnInit(): void {
  }
  addnotice()
  {
    this.add.createnotice(this.createnotice.value).subscribe((result)=>{
      this.alert=true;
      this.createnotice.reset({});

    })
  }
}
