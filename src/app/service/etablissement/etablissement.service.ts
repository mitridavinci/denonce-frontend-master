import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  constructor(private api: ApiService) { }

  getEtablissement() {
    return this.api.getResource(this.api.host + '/etablissement');
  }

  getOneEtablissement(id){
    return this.api.getResource(this.api.host + '/etablissement/'+id);
  }

  updateEtablissement(id, etablissement){
    return this.api.putResource(this.api.host + '/etablissement/'+id, etablissement);
  }

  deleteEtablissement(id){
    return this.api.deleteResource(this.api.host + '/etablissement/'+id);
  }

  addEtablissement(etablissement){
    return this.api.postResource(this.api.host + '/etablissement', etablissement);
  }

  getEtablissements(motcle, page, size){
    return this.api.getResource(this.api.host + '/etablissement/chercher?nom='+motcle+'&page='+page+'&size='+size);
  }

  getDenonEtab(id) {
      return this.api.getResource(this.api.host + '/denonce-etab/'+id);
  }

}
