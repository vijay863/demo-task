import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post('https://dummyjson.com/auth/login', credentials);
  }
  getData() {
    return this.http.get('https://dummyjson.com/todos');
  }

  // postData() {
  //   let body = {
  //     todo: 'Use DummyJSON in the project',
  //     completed: false,
  //     userId: 5
  //   }
  //   return this.http.post('https://dummyjson.com/todos/add', body)
  // }

  updateData(id:any){
    let updatedData={
      completed:false
    }
    return this.http.put('https://dummyjson.com/todos/'+ id, updatedData)
  }

  // deleteData(){
  //   return this.http.delete('https://dummyjson.com/todos/1')
  // }

  // API url
  baseApiUrl = 'https://v2.convertapi.com/upload';


  // Returns an observable
  upload(file:any): Observable<any> {
    // Create form data 
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append('file', file, file.name);

    // Make http post request over api
    // with formData as req
    return this.http.post(this.baseApiUrl, formData);
  }
}
