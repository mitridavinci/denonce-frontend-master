import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private api:ApiService) { }

  getUsers(){
    return this.api.getResource(this.api.host+"/users");
  }

  getOneUser(id){
    return this.api.getResource(this.api.host+"/user/"+id)
  }

  updateUser(id, user){
    return this.api.putResource(this.api.host+"/users/"+id, user);
  }

  addUser(user){
    return this.api.postResource(this.api.host+"/register", user);
  }

  deleteUser(id){
    return this.api.deleteResource(this.api.host+"/users/"+id);
  }

  getUser(motcle, page, size){
    return this.api.getResource(this.api.host + '/users/chercher?nom='+motcle+'&page='+page+'&size='+size);
  }
}
