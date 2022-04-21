import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {QuartierService} from '../service/quartier/quartier.service';
import {EtablissementService} from '../service/etablissement/etablissement.service';
import {Quartier} from '../list-quartiers/list-quartiers.component';
import {RegionService} from '../service/region/region.service';
import {VilleService} from '../service/ville/ville.service';
import {AlertService} from '../service/alert/alert.service';
import Swal from "sweetalert2";

export class Etablissemnt {
  constructor(private id:number,
              private nom:string,
              private quartier:Quartier,
              private tel:string,
              private email:string){}
}

@Component({
  selector: 'app-list-etablissements',
  templateUrl: './list-etablissements.component.html',
  styleUrls: ['./list-etablissements.component.css']
})
export class ListEtablissementsComponent implements OnInit {

  quartiers: Object = [];
  etablissements: Object = [];
  etablissement: Object = {"id":0,"nom":"", "quartier":{"nom":""}, "tel":"", "email":""};
  villes: Object = [] ;
  regions: Object = [];
  motCle = '';
  page = 0;
  size = 5;
  pages:any;
  currentPage = 0;
  infoS: any[];
  errors: any[];
  constructor(private router: Router,
              private etablissementService: EtablissementService,
              private quartierService:QuartierService,
              private regionService:RegionService,
              private villeService:VilleService,
              private alertService:AlertService) { }

  ngOnInit() {
    this.getEtablissement();
    this.getQuartier();
    this.getRegion();
    this.getVille();
  }

  updateEtablissement(id) {
    this.router.navigate(['etablissement', id]);
    console.log('Modification de ' + id);
  }
  getEtablissement(){
    this.etablissementService.getEtablissement().subscribe(data => {
      console.log(data);
      this.etablissements = data;
    });
  }

  getQuartier(){
    this.quartierService.getQuartier().subscribe(
      data => {
        console.log(data);
        this.quartiers = data;
      }
    )
  }

  delEtablissement(etablissement) {
    Swal.fire({
      title: 'Attention !',
      text: 'Supprimer '+etablissement.nom+' ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.value) {
        this.etablissementService.deleteEtablissement(etablissement.id).subscribe(
          data => {
            this.getEtablissement();
            this.alertService.showAlert('Supprimer !', etablissement.nom+' a été supprimer', 'success')
          }, error1 => {
            this.alertService.showAlert('Error !', ''+error1.error.message, 'warning')
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.alertService.showAlert('Annulé', 'Aucune suppression !', 'info')
      }
    })
  }


  addEtablissement(etablissement){
    //console.log(etablissement);
    this.errors = [];
    if (etablissement.nom.length < 8 || etablissement.nom.trim()==""){
      this.errors.push("Nom trop court");
    }if(!Number(etablissement.tel) || etablissement.tel.length < 9){
      this.errors.push("Numero incorecte")
    }else{
      this.errors = null;
      this.etablissementService.addEtablissement(etablissement).subscribe(
        data => {
          console.log(data);
          this.getEtablissement();
          this.alertService.alert('Etablissement ajouté', 'success');
        }
      )
    }
  }

  getVille(){
    this.villeService.getVille().subscribe(
      data =>{
        console.log(data);
        this.villes = data;
      }
    )
  }

  getRegion(){
    this.regionService.getRegion().subscribe(
      data =>{
        console.log(data);
        this.regions = data;
      }
    )
  }

  setVille(id){
    this.regionService.getVilleRegion(id).subscribe(
      data => {
        console.log(data);
        this.villes = data;
      }
    )
  }

  setQuartier(id){
    this.villeService.getQuartierVille(id).subscribe(
      data => {
        console.log(data);
        this.quartiers = data;
      }
    )
  }

  setEtab(id){
    if(id == -1){
      this.getEtablissement();
    }else{
    this.quartierService.getEtabQuartier(id).subscribe(
      data => {
        console.log(data);
        this.etablissements = data;
      }
    )
    }
  }

  doSearch(){
    this.etablissementService.getEtablissements(this.motCle, this.currentPage, this.size).subscribe(
      data => {
        console.log(data['totalPages']);
        this.etablissements = data['content'];
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

  show(etablissement){
    this.infoS = new Array(etablissement);
  }

}
