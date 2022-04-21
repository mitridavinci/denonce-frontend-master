import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VilleService} from '../service/ville/ville.service';
import {RegionService} from '../service/region/region.service';
import {AuthenticationService} from '../service/authentication.service';

import Swal from 'sweetalert2';
import {AlertService} from '../service/alert/alert.service';

export class Ville {
  constructor(private id: number,
              public nom: string,
              private region: Object) {

  }

}

@Component({
  selector: 'app-list-villes',
  templateUrl: './list-villes.component.html',
  styleUrls: ['./list-villes.component.css']
})
export class ListVillesComponent implements OnInit {

  regions:Object = [];
  villes: Object = [ ];
  ville: Object = {"id":0,"nom":""};
  motCle = '';
  page = 0;
  size = 5;
  pages:any;
  currentPage = 0;
  infoS:any;
  errors:any = null;
  constructor(private router: Router,
              private villeService: VilleService,
              private regionService:RegionService,
              private aut:AuthenticationService,
              private alertService:AlertService) { }

  ngOnInit() {
    this.getVille();
    this.getRegion();
  }

  updateVille(id) {
    this.router.navigate(['ville', id]);
    console.log('Modification de ' + id);
  }
  getVille(){
    this.villeService.getVille().subscribe(data => {
      console.log(data);
      this.villes = data;
    });
  }

  delVille(ville) {
    Swal.fire({
      title: 'Attention !',
      text: 'Supprimer '+ville.nom+' ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.villeService.deleteVille(ville.id).subscribe(
          data => {
            this.getVille();
            this.alertService.showAlert('Supprimer !', ville.nom+' a été supprimer', 'success')
          }, error1 => {
            this.alertService.showAlert('Error !', ''+error1.error.message, 'warning')
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.alertService.showAlert('Annulé', 'Aucune suppression !', 'info')
      }
    })
  }

  getRegion(){
    this.regionService.getRegion().subscribe(
      data => {
        console.log(data);
        this.regions = data;
      }
    )
  }

  alert(){
    Swal.mixin({
      toast:true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 2000
    }).fire({
      type: 'success',
      title: 'Ville Ajoutée !',
    })
  }

  addVille(ville){
    this.errors = [];
    if (ville.nom.length < 3 || ville.nom.trim()==""){
      this.errors.push("Nom trop court");
    }else{
      this.errors = null;
      this.villeService.addVille(ville).subscribe(
        data => {
          console.log(data)
          this.getVille();
          this.alert();
        }, err =>{
          this.aut.logout();
          this.router.navigateByUrl("/login");
        }
      )
    }
  }
  setVille(id){
      if(id == -1){
        this.getVille();
      }else{
      this.regionService.getVilleRegion(id).subscribe(
        data => {
          console.log(data);
          this.villes = data;
        }
      )
      }
  }

  doSearch(){
    this.villeService.getVilles(this.motCle, this.currentPage, this.size).subscribe(
      data => {
        console.log(data['totalPages']);
        this.villes = data['content'];
        this.pages = new Array(data['totalPages']);
      }
    )
  }

  chercher(){
    this.doSearch();
  }

  goToPage(i){
    this.currentPage = i;
    this.doSearch()
  }

  show(ville){
    this.infoS = new Array(ville);
  }

}
