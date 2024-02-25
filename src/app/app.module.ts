import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { SheetComponent } from './sheet/sheet.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { StudentComponent } from './student/student.component';
import { SdataComponent } from './sdata/sdata.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreatenoticeComponent } from './createnotice/createnotice.component';
import { ViewnoticeComponent } from './viewnotice/viewnotice.component';
import { NoticeComponent } from './notice/notice.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SheetComponent,
    AttendanceComponent,
    HeaderComponent,
    StudentComponent,
    SdataComponent,
    CreatenoticeComponent,
    ViewnoticeComponent,
    NoticeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
