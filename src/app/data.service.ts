import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private el:HttpClient) { }
  get(){
    let url='https://jsonplaceholder.typicode.com/todos'
    return this.el.get(url)
  }
}
