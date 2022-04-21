import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';
import {AlertService} from '../service/alert/alert.service';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:boolean = false;

  constructor(private authenticationService:AuthenticationService,
              private router:Router,
              private alertService:AlertService,
              private api:ApiService) { }

  ngOnInit() {
  }

  onLogin(admin){
    this.authenticationService.loginUser(admin).subscribe(
      data => {
        let jwt = data.headers.get('Authorization');
        this.authenticationService.saveToken(jwt);
        this.api.loadToken();
        this.authenticationService.setDataOfAdmin();
        this.router.navigateByUrl("/admin");
        this.alertService.showAlert('Connecté !', 'Bienvenue '+admin.nom, 'success');
      },
      err =>{
        console.log(err);
        this.error = true;
      }
    )
  }

}
