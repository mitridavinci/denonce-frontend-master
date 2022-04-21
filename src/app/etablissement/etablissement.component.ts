import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EtablissementService} from '../service/etablissement/etablissement.service';
import {AlertService} from '../service/alert/alert.service';

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {

  etablissement: Object = {"id":0, "nom":"", "quartier":{}, "tel":"", "email":""};
  id: number;
  errors: any[];

  constructor(private route:ActivatedRoute,
              private etablissementService:EtablissementService,
              private router:Router,
              private alertService:AlertService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getEtablissement(this.id);
  }

  getEtablissement(id){
    this.etablissementService.getOneEtablissement(id).subscribe(
      data =>{
        console.log(data);
        this.etablissement = data;
      }
    )
  }

  saveEtablissement(){
    this.errors = [];
    if (this.etablissement['nom'].length < 8 || this.etablissement['nom'].trim()==""){
      this.errors.push("Nom trop court");
    }if(!Number(this.etablissement['tel']) || this.etablissement['tel'].length < 9){
      this.errors.push("Numero incorecte")
    }else{
      this.etablissementService.updateEtablissement(this.id, this.etablissement).subscribe(
        data => {
          console.log(data);
        }
      )
      this.router.navigate(['etablissement']);
      this.alertService.alert('Etablissement modifié !', 'success');
    }
  }

}
