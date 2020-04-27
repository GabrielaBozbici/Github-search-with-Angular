import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public evt = new Subject<any>();
  public emmitEvt(action: any) {
    this.evt.next(action);
  }
  public receiveEvent(): Observable<any> {
    return this.evt.asObservable();
  }

  constructor(public http: HttpClient) { }

  getUsers(user: any): Observable<any> {
    const userUrl = `https://api.github.com/users/${user}/repos`;

    return this.http.get(userUrl, httpOptions);
  }
}
