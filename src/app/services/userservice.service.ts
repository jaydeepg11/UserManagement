import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) {
   }

   getdate()
   {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
   }
}
