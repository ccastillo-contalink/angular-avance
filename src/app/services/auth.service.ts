import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  user$: BehaviorSubject<any>;


  private url: string ="https://99clb5k89d.execute-api.us-east-1.amazonaws.com/test/login";

  constructor(private http: HttpClient) { 

    console.log(JSON.parse(localStorage.getItem("user")));

    this.user$ = new BehaviorSubject<any>(JSON.parse(localStorage.getItem("user")));
  
  
  
  }

  public login(username: string, password: string):Observable<any>{

    return this.http.post<any>(this.url, {
      username, password
    }).pipe(tap(response=>{

      if(response.success){
        this.user$.next({
          email: username, token: response.token
        });
        localStorage.setItem("user", JSON.stringify({email: username, token: response.token}));
      }

    }));

  }


  public logout(){
    localStorage.removeItem("user");
    this.user$.next(null);
  }



}
