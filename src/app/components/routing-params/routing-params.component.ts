import { Component, OnInit } from '@angular/core';
import { User} from '../../model/user';
import { Observable } from 'rxjs';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-routing-params',
  templateUrl: './routing-params.component.html',
  styleUrls: ['./routing-params.component.css']
})
export class RoutingParamsComponent implements OnInit {
  profile$: Observable<any>;

  public user: User= {
    id:'1',
    address_id: '1',
    name:'Sr Angular'
  }

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profile$ = this.profileService.getProfile();

  }

}
