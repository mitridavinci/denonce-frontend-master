import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class QuartierService {

  constructor(private api: ApiService) {
  }

  getQuartier() {
    return this.api.getResource(this.api.host + '/quartier');
  }

  getOneQuartier(id) {
    return this.api.getResource(this.api.host + '/quartier/' + id);
  }

  updateQuartier(id, quartier) {
    return this.api.putResource(this.api.host + '/quartier/' + id, quartier);
  }

  deleteQuartier(id) {
    return this.api.deleteResource(this.api.host + '/quartier/' + id);
  }

  addQuartier(quartier) {
    return this.api.postResource(this.api.host + '/quartier', quartier);
  }

  getEtabQuartier(id) {
    return this.api.getResource(this.api.host + '/etab-quartier/' + id);
  }

  getQuartiers(motcle, page, size) {
    return this.api.getResource(this.api.host + '/quartier/chercher?nom=' + motcle + '&page=' + page + '&size=' + size);
  }

}

