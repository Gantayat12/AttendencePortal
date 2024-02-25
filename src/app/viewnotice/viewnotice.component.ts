import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
@Component({
  selector: 'app-viewnotice',
  templateUrl: './viewnotice.component.html',
  styleUrls: ['./viewnotice.component.css']
})
export class ViewnoticeComponent implements OnInit {
  public data : any;
  res: Boolean=false;
  name:any;
  constructor(private notice:UserServiceService) { }

  ngOnInit(): void {
    this.notice.getnotice().subscribe(data=>{
      console.log(data);
      this.data=data['msg'];
    })
  }
  dnotice(item: any)
  {
    this.notice.deletenotice(item._id).subscribe((result)=>{
      console.log("Notice Deleted Succesfully");
      this.res=true;
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
