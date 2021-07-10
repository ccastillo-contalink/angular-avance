import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Movie } from '../../../../model/movie'
import { Observable, of} from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import {mergeMap, switchMap, debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies$: Observable<Movie[]>;


  movieForm: FormGroup= new FormGroup({
    query: new FormControl()
  })

  constructor(private moviesService:MoviesService ) { 

  }

  ngOnInit() {

    let query$: Observable<string> = this.movieForm.get('query').valueChanges;

    this.movies$ = query$.pipe(
      debounceTime(500),
      switchMap(query=> {

        if(query === ''){
          of([]);
        }

        return this.moviesService.search(query);
      })
    )

    
  }

}
