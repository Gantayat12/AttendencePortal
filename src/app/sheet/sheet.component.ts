import { Component,OnInit} from '@angular/core';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {
  pre: Boolean=false;
  abs: Boolean=false;
  name:any;
  public data : any;
  router: any;

  constructor(private user:UserServiceService) 
  {

  }
   ngOnInit(): void
  { 
    this.user.getdata().subscribe(data=>{
      console.log(data);
      this.data=data['msg'];
    })
  }
  // // present(item: any)
  // // {
  // //   this.user.present(item._id).subscribe((result)=>{
  // //     console.log("Present");
  // //     this.pre=true;
  // //     this.router.navigateByUrl('/sheet');

  // //   })
  // // }
  // // absent(item: any)
  // // {
  // //   this.user.absent(item._id).subscribe((result)=>{
  // //     console.log("absent");
  // //     this.abs=true;
  // //     this.router.navigateByUrl('/sheet');
  // //   })
  // }
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
dstud(item:any)
{
  this.user.deletestudent(item._id).subscribe((result)=>{
    console.log("Student is Deleted");
  })
}
}
