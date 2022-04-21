import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alert(title, type){
    Swal.mixin({
      toast:true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000
    }).fire({
      type: type,
      title: title,
    })
  }

  showAlert(title, message, type){
    Swal.fire(
      title,
      message,
      type
    )
  }


}
