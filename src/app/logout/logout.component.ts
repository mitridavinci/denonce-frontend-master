import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';
import {AlertService} from '../service/alert/alert.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private aut:AuthenticationService,
              private router:Router,
              private alertService:AlertService) { }

  ngOnInit() {
    this.aut.logout()
    this.router.navigateByUrl("/login")
    this.alertService.alert('Bye Bye', 'warning');
  }

}
