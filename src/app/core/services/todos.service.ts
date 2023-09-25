import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  

  constructor(private http:HttpClient) { 
    this.getJSON().subscribe(data => {
      console.log(data);
  });
  }
  getJsonData(){
    return this.http.get('assets/data/todos.json')
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/data/todos.json");
}
}
