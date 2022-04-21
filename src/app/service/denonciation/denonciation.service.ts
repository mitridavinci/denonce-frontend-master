import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class DenonciationService {

  constructor(private api: ApiService) {
  }

  getDenonciation() {
    return this.api.getResource(this.api.host + '/denonciation');
  }

  getOneDenonciation(id) {
    return this.api.getResource(this.api.host + '/denonciation/' + id);
  }

  addDenonciation(denonciation) {
    return this.api.postResource(this.api.host + '/denonciation', denonciation, false);
  }

  updateDenonciation(id, denonciation) {
    return this.api.putResource(this.api.host + '/denonciation/' + id, denonciation);
  }

  getDenonciations(motcle, page, size) {
    return this.api.getResource(this.api.host + '/denonciation/chercher?nom=' + motcle + '&page=' + page + '&size=' + size);
  }

}

