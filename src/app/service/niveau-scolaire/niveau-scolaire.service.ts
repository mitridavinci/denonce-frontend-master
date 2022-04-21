import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class NiveauScolaireService {

  constructor(private api: ApiService) { }

  getNiveauScolaire(){
    return this.api.getResource(this.api.host + '/niveau-scolaire');
  }

}
