import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DenonciationService} from '../service/denonciation/denonciation.service';
import {EtablissementService} from '../service/etablissement/etablissement.service';
import {ListEtablissementsComponent} from '../list-etablissements/list-etablissements.component';

@Component({
  selector: 'app-list-denonciations',
  templateUrl: './list-denonciations.component.html',
  styleUrls: ['./list-denonciations.component.css']
})
export class ListDenonciationsComponent implements OnInit {

  denonciations: Object = [ ];
  etablissements: Object = [];

  motCle = '';
  page = 0;
  size = 5;
  pages:any;
  currentPage = 0;
  infoS:any;
  constructor(private router: Router,
              private denonciationService: DenonciationService,
              private etablissementService: EtablissementService,
              ) { }

  ngOnInit() {
    this.getDenonciation();
    this.getEtablissement();
  }

  getDenonciation(){
    this.denonciationService.getDenonciation().subscribe(data => {
      console.log(data);
      this.denonciations = data;
    });
  }

  updateDenonciation(id) {
    this.router.navigate(['denonciation', id]);
    console.log('Modification de ' + id);
  }

  getEtablissement(){
    this.etablissementService.getEtablissement().subscribe(data => {
      console.log(data);
      this.etablissements = data;
    });
  }

  setDenon(id){
    if(id == -1){
      this.getDenonciation();
    }else{
      this.etablissementService.getDenonEtab(id).subscribe(
        data => {
          console.log(data);
          this.denonciations = data;
        }
      )
    }
  }

  doSearch(){
    this.denonciationService.getDenonciations(this.motCle, this.currentPage, this.size).subscribe(
      data => {
        console.log(data['totalPages']);
        this.denonciations = data['content'];
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

  show(denonciation){
    this.infoS = new Array(denonciation);
  }

}
