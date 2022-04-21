import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EtablissementService} from '../service/etablissement/etablissement.service';
import {DenonciationService} from '../service/denonciation/denonciation.service';
import {AlertService} from '../service/alert/alert.service';

@Component({
  selector: 'app-update-denonciation',
  templateUrl: './update-denonciation.component.html',
  styleUrls: ['./update-denonciation.component.css']
})
export class UpdateDenonciationComponent implements OnInit {

  id:number;
  denonciation:Object = {
    "id": 0,
    "etablissement": {},
    "niveauScolaire": {},
    "sexe": "",
    "age": 0,
    "typeDenonciation": {},
    "personneConcerne": "",
    "message": "",
    "date": null,
    "statut": null
  };

  constructor(private route:ActivatedRoute,
              private denonciationService:DenonciationService,
              private router:Router,
              private alertService:AlertService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getDenonciation(this.id);
  }

  getDenonciation(id){
    this.denonciationService.getOneDenonciation(id).subscribe(
      data =>{
        console.log(data);
        this.denonciation = data;
      }
    )
  }

  saveDenonciation(){
    this.denonciationService.updateDenonciation(this.id, this.denonciation).subscribe(
      data => {
        console.log(data);
      }
    )
    this.router.navigate(['denonciation']);
    if(this.denonciation['statut']){
      this.alertService.alert('Denonciation Suivie !', 'success');
    }else{
      this.alertService.alert('Denonciation Non Suivie !', 'success');
    }
  }

}
