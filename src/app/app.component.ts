import { Component } from '@angular/core';
import {DataService} from './data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api';
  data:any
  constructor(private user:DataService){
  this.getDataFromApi();
  }
  ngOnIt(){

  }
  // get JSON data from listing api
  private getDataFromApi(){
    this.user.get().subscribe(data=>{
      console.warn(data)
     this.data=data
    })
  }
}
