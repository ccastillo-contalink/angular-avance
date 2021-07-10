import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Movie } from '../../../../model/movie'
import { Observable} from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

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

    this.movieForm.get('query').valueChanges.subscribe(text=>{
      console.log(text);
      this.movies$ = this.moviesService.search(text);


    });


    
  }

}
