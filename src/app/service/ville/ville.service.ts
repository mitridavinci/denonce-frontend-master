import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})

export class VilleService{

  constructor(private api:ApiService) {
    //super(httpclient);
  }

  getVille() {
    return this.api.getResource(this.api.host + '/ville');
  }

  getOneVille(id){
    return this.api.getResource(this.api.host + '/ville/'+id);
  }

  updateVille(id, ville){
    return this.api.putResource(this.api.host + '/ville/'+id, ville);
  }

  deleteVille(id){
    return this.api.deleteResource(this.api.host + '/ville/'+id);
  }

  addVille(ville){
    return this.api.postResource(this.api.host + '/ville', ville);
  }

  getQuartierVille(id){
    return this.api.getResource(this.api.host + '/quartier-ville/'+id);
  }

  getVilles(motcle, page, size){
    return this.api.getResource(this.api.host + '/ville/chercher?nom='+motcle+'&page='+page+'&size='+size);
  }

}
