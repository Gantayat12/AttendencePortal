import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { CreateComponent } from './create/create.component';
import { CreatenoticeComponent } from './createnotice/createnotice.component';
import { HeaderComponent } from './header/header.component';
import { NoticeComponent } from './notice/notice.component';
import { SdataComponent } from './sdata/sdata.component';
import { SheetComponent } from './sheet/sheet.component';
import { StudentComponent } from './student/student.component';
import { ViewnoticeComponent } from './viewnotice/viewnotice.component';

const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"attendance" ,component:AttendanceComponent},
  {path:"sheet" ,component:SheetComponent},
  {path:"create" ,component:CreateComponent},
  {path:"student",component:StudentComponent},
  {path:"createnotice",component:CreatenoticeComponent},
  {path:"viewnotice",component:ViewnoticeComponent},
  {path:"notice",component:NoticeComponent},
  {path:"sdata",component:SdataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
