import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {log} from 'util';
import {Router} from '@angular/router';
import {AlertService} from './alert/alert.service';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  host = window["cfgApiBaseUrl"];
  jwtToken:string = null;
  roles = [];
  private expiration: any;

  constructor(private http:HttpClient,
              private router:Router,
              private alertService:AlertService,
              public api:ApiService
              ) { }

  loginUser(user){
    return this.http.post(this.host+"/login", user, {observe:'response'});
  }

  loadToken(){
    this.expiration = localStorage.getItem("expired");
    if(new Date().getTime() < Number(localStorage.getItem("expired"))){
      this.jwtToken = localStorage.getItem('token');
    }else{
      this.logout();
      this.router.navigateByUrl("/login");
      this.alertService.alert("Delai de connexion depassé", "warning");
    }

  }

  saveToken(jwt: string) {
    this.jwtToken = jwt;
    localStorage.setItem("token", jwt);
    let jwtHelperService = new JwtHelperService();
    this.roles = jwtHelperService.decodeToken(jwt).roles;
    localStorage.setItem("expired", jwtHelperService.decodeToken(jwt).exp);
    console.log(localStorage.getItem("expired"));
  }

  isAdminLoggedIn(){
    let token = localStorage.getItem('token')
    return !(token === null)
  }

  isSupperAdmin(){
    let dtype = localStorage.getItem('dtype');
    return (dtype=="ADMIN");
  }

  logout(){
    this.jwtToken = null;
    localStorage.removeItem('token');
    localStorage.removeItem('ids');
    localStorage.removeItem('dtype');
    localStorage.removeItem('expired');
  }

  setDataOfAdmin(){
    let id;
    for (let r of this.roles){
      id = r.authority;
      let ids = id.split("-", 2);
      localStorage.setItem('ids', ids[1]);
      localStorage.setItem('dtype', ids[0]);
    }
  }

  getCouvertures(ids){
    /*if (dtype == "Region"){
      console.log("Region")
    } else if (dtype == "Ville"){
      console.log("Ville")
    } else if (dtype == "Quartier"){
      console.log("Quartier")
    }else if (dtype == "Etablissement"){
      console.log("Etab")
    }*/
    return this.http.get(this.host+'/couverture/'+ids);
  }

  getCouverture(){
    return this.http.get(this.host+"/couverture");
  }
}
