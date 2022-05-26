import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import{HttpClient, HttpClientModule} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  data:any;
  
  constructor(private user:ServiceService , private http :HttpClient){
    // this.user.getdata().subscribe(data=>{
    //   console.warn(data)
    //   this.data=data
    // })
  }
  getUserFormData(data:any)
  {
    // console.warn(data);
    this.user.saveusers (data).subscribe((result)=>{
    console.warn(result)
    })
  }
}
