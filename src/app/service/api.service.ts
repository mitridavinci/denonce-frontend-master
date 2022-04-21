import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {AlertService} from './alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public host:string = window["cfgApiBaseUrl"];

  http : HttpClient;
  jwtToken: string = null;

  constructor(private httpClient: HttpClient, private alertService:AlertService) {
    this.http = httpClient;
  }

  /*
  * get from the server the ressource located at the @url
  */
  public getResource(url){ //TO CHECK AND TEST
    return this.http.get(url);
  }

  public postResource(url, ressource, droit=true){ //TO CHECK AND TEST
    if(droit==false){
      return this.http.post(url, ressource);
    }
    if (this.jwtToken==null) this.loadToken();
    if (new Date().getTime()/1000 > Number(localStorage.getItem("expired"))){
      this.alertService.showAlert('Reconnecté vous', 'Délai de connexion depassé', 'info');
    }else{
      return this.http.post(url, ressource, {headers: new HttpHeaders({'Authorization':this.jwtToken})});
    }
  }

  public putResource(url, ressource){ //TO CHECK AND TEST
    if (this.jwtToken==null) this.loadToken();
    if (new Date().getTime()/1000 > Number(localStorage.getItem("expired"))){
      this.alertService.showAlert('Reconnecté vous', 'Délai de connexion depassé', 'info');
    }else{
      this.loadToken();
      return this.http.put(url, ressource, {headers: new HttpHeaders({'Authorization':this.jwtToken})});
    }
  }

  public deleteResource(url){ //TO CHECK AND TEST
    if (this.jwtToken==null) this.loadToken();
    if (new Date().getTime()/1000 > Number(localStorage.getItem("expired"))){
      this.alertService.showAlert('Reconnecté vous', 'Délai de connexion depassé', 'info');
    }else{
      return this.http.delete(url, {headers: new HttpHeaders({'Authorization':this.jwtToken})});
    }
  }

  loadToken(){
    console.log(new Date().getTime()/1000, localStorage.getItem("expired"));
    this.jwtToken = localStorage.getItem('token');
  }
}
