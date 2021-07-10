import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Movie } from '../../../model/movie';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class MoviesService {

  private url: string='https://api.themoviedb.org/3/search/movie';
  private api_key: string = '270d9e4ef3fca25ea83fb808c43cbb9d';


  constructor(private http: HttpClient) { 

  }


  public search(text: string): Observable<Movie[]>{

    let params: HttpParams= new HttpParams().append('api_key', this.api_key).append('query', text);

    return this.http.get<Movie[]>(this.url, {params: params}).pipe(
      tap((response)=> {console.log(response);}),
      map((response: any)=> {
        return response.results;

      })
    );


  }
}
