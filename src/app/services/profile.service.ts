import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string ="https://99clb5k89d.execute-api.us-east-1.amazonaws.com/test/profile";

  constructor(private autService: AuthService, private http: HttpClient) {

   }

   public getProfile(): Observable<any> {

    let user = this.autService.user$.getValue();
    let headers: HttpHeaders = new HttpHeaders().append('Authorization', 'Bearer ' + user.token );

     return this.http.get<any>(this.url,{headers})
   }
}
