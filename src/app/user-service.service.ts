import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  static createstudent: any;

  constructor(private http:HttpClient) { }
  getdata()
  {
    let url="https://attendance-system-backend.herokuapp.com/attendance";
    return this.http.get(url);
  }
  getnotice()
  {
    let url="https://attendance-system-backend.herokuapp.com/getnotice";
    return this.http.get(url);
  }
  createstudent(data: any)
  {
    let url="https://attendance-system-backend.herokuapp.com/attendcreate";
    return this.http.post(url,data);

  }
  deletestudent(id:any)
  {
    let url="https://attendance-system-backend.herokuapp.com/deleteattend";
    return this.http.delete(`${url}/${id}`);
  }
  createnotice(data:any)
  {
    let url="https://attendance-system-backend.herokuapp.com/noticecreate";
    return this.http.post(url,data)
  }
  deletenotice(id:any)
  {
    let url="https://attendance-system-backend.herokuapp.com/deletenotice";
    return this.http.delete(`${url}/${id}`);
  }
  // present(id: any)
  // {
  //   let purl="https://attendance-system-backend.herokuapp.com/present";
  //   return this.http.put(`${purl}/${id}`);
  // }
  // absent(id: any)
  // {
  //   let purl="https://attendance-system-backend.herokuapp.com/absent";
  //   return this.http.put(`${purl}/${id}`);
  // }
}
