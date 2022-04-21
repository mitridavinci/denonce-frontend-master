import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private api: ApiService) { }

  getRegion(){
    return this.api.getResource(this.api.host + '/region');
  }

  getVilleRegion(id){
    return this.api.getResource(this.api.host + '/ville-region/'+id);
  }

}
