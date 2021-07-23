import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserModel } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public postUser(data: UserModel) {
    return this.http.post('http://localhost:3000/users', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  public getUser() {
    return this.http.get<any>('http://localhost:3000/users').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
