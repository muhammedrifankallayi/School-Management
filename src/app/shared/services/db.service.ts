import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  DbGet(url: string): any {
    return this.http.get(`http://localhost:8080/${url}`)
  }
  DbPost(url: string, data: any) {
    return this.http.post(`http://localhost:8080/${url}`, data)
  }
  DbDelete(url: string, id: any) {
    return this.http.delete(`http://localhost:8080/${url}`, id)
  }
  DbPut(url: string, data: any) {
    return this.http.put(`http://localhost:8080/${url}`, data)
  }
  DbPatch(url: string, data: any) {
    return this.http.patch(`http://localhost:8080/${url}`, data)
  }

}
