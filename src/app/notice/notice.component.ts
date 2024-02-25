import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  public data : any;
  name:any;
  constructor(private notice :UserServiceService) { }

  ngOnInit(): void {
    this.notice.getnotice().subscribe(data=>{
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
