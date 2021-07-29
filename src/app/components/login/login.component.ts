import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';


//C0404694046

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  is_valid_username$: Observable<boolean>; 
  is_valid_password$: Observable<boolean>; 

  formItem: FormGroup = new FormGroup({
    username: new FormControl('cesar.cast.more@gmail.com', [Validators.nullValidator, Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.nullValidator, Validators.required]),
    remember: new FormControl(false)
  })

  constructor(private auth: AuthService, private router: Router) { 

    this.is_valid_username$ = this.formItem.get('username').statusChanges;

    this.is_valid_password$ = this.formItem.get('password').statusChanges;


  }

  ngOnInit() {

    this.formItem.get('remember').valueChanges.subscribe(value=> {
      if(value){
        this.formItem.patchValue({
          username: 'cesar.cast.more@gmail.com',
          password: 'cesar.cast.more'
        })
      } else {
        this.formItem.patchValue({
          username: null, 
          pssword: null
        })
      }
    })

  }


  async login(){

    let form = this.formItem.value;
    if(this.formItem.valid){
      let item = await this.auth.login(form.username, form.password).toPromise();

      if(item.success){
        this.router.navigateByUrl('componente_externos');
      }

    }



  }

  cancel(){
    this.formItem.reset();
  }

  get username_errors(){
    if(this.formItem.get('username')){

    }else {
      return
    }
  }




}
