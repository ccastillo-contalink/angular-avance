import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Movie } from '../../../../model/movie'
import { Observable} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies$: Observable<Movie[]>;

  constructor(private moviesService:MoviesService ) { 

  }

  ngOnInit() {
    this.movies$ = this.moviesService.search('toys');
    
  }

}
