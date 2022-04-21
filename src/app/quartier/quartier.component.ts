import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {VilleService} from '../service/ville/ville.service';
import {QuartierService} from '../service/quartier/quartier.service';
import Swal from "sweetalert2";
import {AlertService} from '../service/alert/alert.service';

@Component({
  selector: 'app-quartier',
  templateUrl: './quartier.component.html',
  styleUrls: ['./quartier.component.css']
})
export class QuartierComponent implements OnInit {

  quartier: Object = {"id":0,"nom":"", "ville":{}};
  id: number;
  errors: any[];

  constructor(private route:ActivatedRoute,
              private quartierService:QuartierService,
              private router:Router,
              private alertService:AlertService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getQuartier(this.id);
  }

  getQuartier(id){
    this.quartierService.getOneQuartier(id).subscribe(
      data =>{
        console.log(data);
        this.quartier = data;
      }
    )
  }



  saveQuartier(){
    this.errors = [];
    if (this.quartier['nom'].length < 3 || this.quartier['nom'].trim()==""){
      this.errors.push("Nom trop court");
    }else{
      this.quartierService.updateQuartier(this.id, this.quartier).subscribe(
        data => {
          console.log(data);
        }
      )
      this.router.navigate(['quartier']);
      this.alertService.alert('Quartier Modifié !', 'success');
    }
  }


}
