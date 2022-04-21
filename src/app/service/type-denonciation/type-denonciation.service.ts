import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class TypeDenonciationService {

  constructor(private api:ApiService) { }

  getTypeDenonciation(){
    return this.api.getResource(this.api.host + '/type-denonciation');
  }
}
