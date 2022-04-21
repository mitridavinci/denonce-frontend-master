import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {VilleService} from '../service/ville/ville.service';
import {QuartierService} from '../service/quartier/quartier.service';
import Swal from "sweetalert2";
import {AlertService} from '../service/alert/alert.service';

export class Quartier {
  constructor(private id:number,
              private nom:string,
              private ville: Object) {
  }


}

@Component({
  selector: 'app-list-quartiers',
  templateUrl: './list-quartiers.component.html',
  styleUrls: ['./list-quartiers.component.css']
})
export class ListQuartiersComponent implements OnInit {

  villes: Object = [ ];
  quartiers: Object = [];
  quartier: Object = {"id":0,"nom":"", "ville":{}};
  motCle = '';
  page = 0;
  size = 5;
  pages:any;
  currentPage = 0;
  infoS: any[];
  errors: any;
  constructor(private router: Router,
              private quartierService: QuartierService,
              private villeService:VilleService,
              private alertService:AlertService) { }

  ngOnInit() {
    this.getQuartier();
    this.getVille();
  }

  updateQuartier(id) {
    this.router.navigate(['quartier', id]);
    console.log('Modification de ' + id);
  }
  getQuartier(){
    this.quartierService.getQuartier().subscribe(data => {
      console.log(data);
      this.quartiers = data;
    });
  }

  getVille(){
    this.villeService.getVille().subscribe(
      data => {
        console.log(data);
        this.villes = data;
      }
    )
  }

  delQuartier(quartier) {
    Swal.fire({
      title: 'Attention !',
      text: 'Supprimer '+quartier.nom+' ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.quartierService.deleteQuartier(quartier.id).subscribe(
          data => {
            this.getQuartier();
            this.alertService.showAlert('Supprimer !', quartier.nom+' a été supprimer', 'success')
          }, error1 => {
            this.alertService.showAlert('Error !', ''+error1.error.message, 'warning')
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.alertService.showAlert('Annulé', 'Aucune suppression !', 'info')
      }
    })
  }

  addQuartier(quartier){
    this.errors = [];
    if (quartier.nom.length < 3 || quartier.nom.trim()==""){
      this.errors.push("Nom trop court");
    }else{
      this.errors = null;
      this.quartierService.addQuartier(quartier).subscribe(
       data => {
         console.log(data);
         this.getQuartier();
         this.alertService.alert('Quartier Ajouté !', 'success');
       }
     )
    }
  }

  setQuartier(id){
    if(id == -1){
      this.getQuartier();
    }else{
    this.villeService.getQuartierVille(id).subscribe(
      data => {
        console.log(data);
        this.quartiers = data;
      }
    )
    }
  }

  doSearch(){
    this.quartierService.getQuartiers(this.motCle, this.currentPage, this.size).subscribe(
      data => {
        console.log(data['totalPages']);
        this.quartiers = data['content'];
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

  show(quartier){
    this.infoS = new Array(quartier);
  }

}
