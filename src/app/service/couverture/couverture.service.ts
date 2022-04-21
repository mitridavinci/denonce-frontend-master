import { Injectable } from '@angular/core';
import {ApiService} from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class CouvertureService {

  constructor(private api: ApiService) {
  }

  updateRole(nom, id) {
    return this.api.putResource(this.api.host + '/update-role/' + nom + '?id=' + id, '');
  }

  hideAdminRole(user) {
    return !(user.role.couverture.id != 0);
  }

}

