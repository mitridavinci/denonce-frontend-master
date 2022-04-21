import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EtablissementService} from '../service/etablissement/etablissement.service';
import {QuartierService} from '../service/quartier/quartier.service';
import {RegionService} from '../service/region/region.service';
import {VilleService} from '../service/ville/ville.service';
import {Etablissemnt} from '../list-etablissements/list-etablissements.component';
import {TypeDenonciationService} from '../service/type-denonciation/type-denonciation.service';
import {NiveauScolaireService} from '../service/niveau-scolaire/niveau-scolaire.service';
import {DenonciationService} from '../service/denonciation/denonciation.service';
import {AlertService} from '../service/alert/alert.service';
import set = Reflect.set;
import {init} from 'protractor/built/launcher';
declare var jquery:any;
declare var $ :any;

export class Denonciation {
  constructor(private id:number,
              private etablissement:Object,
              private niveauScolaire:Object,
              private sexe:string,
              private age:number,
              private typeDenonciation:Object,
              private personneConcerne:string,
              private message:string,
              private date:Date,
              private statut:boolean){}
}

export class Type{
  constructor(private id:number,
              private nom:string,){

  }
}

@Component({
  selector: 'app-denonciation',
  templateUrl: './denonciation.component.html',
  styleUrls: ['./denonciation.component.css']
})
export class DenonciationComponent implements OnInit {

  quartiers: Object = [ ];
  etablissements: Object = [];
  etablissement: Object = {"id":0,"nom":"", "quartier":{"nom":""}, "tel":"", "email":""};
  denonciation: Object = {"id":0,"etablissement":{"nom":""}, "niveauScolaire":{}, "sexe":"", "age":0, "typeDenonciation":{}, "personneConcerne":"", "message":"", "date":Date.now(), "statut":false};
  villes: Object = [] ;
  regions: Object = [];
  typeDenonciations: Object = [] ;
  niveauScolaires: Object = [];
  pautre:boolean = false;
  errors:any = null;

  constructor(private router: Router,
              private etablissementService: EtablissementService,
              private quartierService:QuartierService,
              private regionService:RegionService,
              private villeService:VilleService,
              private typeDenonciationService:TypeDenonciationService,
              private niveauScolaireService:NiveauScolaireService,
              private denonciationService:DenonciationService,
              private alertService:AlertService) { }

  ngOnInit() {
    this.step();
    this.getEtablissement();
    this.getQuartier();
    this.getRegion();
    this.getVille();
    this.getNiveauScolaire();
    this.getTypeDenonciation();
  }

  step(){
    $('#stepwizard').smartWizard({
      theme: 'dots',
      transitionEffect: 'slide',
      transitionSpeed: '400',
      lang: {
        next: 'Suivant',
        previous: 'Précedent'
      }
    });
    console.log("Stepppp");
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

  getNiveauScolaire(){
    this.niveauScolaireService.getNiveauScolaire().subscribe(
      data =>{
        console.log(data);
        this.niveauScolaires = data;
      }
    )
  }

  getTypeDenonciation(){
    this.typeDenonciationService.getTypeDenonciation().subscribe(
      data => {
        console.log(data);
        this.typeDenonciations = data;
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
    this.quartiers = [];
    this.etablissements = [];
  }

  setQuartier(id){
    this.villeService.getQuartierVille(id).subscribe(
      data => {
        console.log(data);
        this.quartiers = data;
      }
    )
    this.etablissements = [];
  }

  setEtab(id){
      this.quartierService.getEtabQuartier(id).subscribe(
        data => {
          console.log(data);
          this.etablissements = data;
        }
      )
  }

  denoncer(){
    console.log(this.denonciation);
    this.denonciationService.addDenonciation(this.denonciation).subscribe(
      data => {
        console.log(data);
        this.alertService.showAlert('Ok', 'message reçu', 'success');
      },
      error => {
        this.alertService.showAlert('Error !', ''+error.error.message, 'error');
      }
    )
  }

  setAutreP(value){
    if (value == ""){
      this.pautre = true;
    } else{
      this.pautre = false;
    }
  }

  /*step(){
    console.log("ok");
    $('#stepwizard').smartWizard();
  }*/

}
