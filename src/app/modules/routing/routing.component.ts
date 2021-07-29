import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  profile$: Observable<any>;


  constructor(private profileService: ProfileService) {

   }


  ngOnInit() {

    this.profile$ = this.profileService.getProfile();


  }

}
