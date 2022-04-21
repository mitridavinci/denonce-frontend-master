import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Ville} from '../list-villes/list-villes.component';
import {VilleService} from '../service/ville/ville.service';
import Swal from "sweetalert2";
import {AlertService} from '../service/alert/alert.service';


@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  ville: Object = {"id":0,"nom":""};
  id: number;
  errors: any[];

  constructor(private route:ActivatedRoute,
              private villeService:VilleService,
              private router:Router,
              private alertService:AlertService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    //new Ville(1, "", 1);
    this.getVille(this.id);
  }


  getVille(id){
    this.villeService.getOneVille(id).subscribe(
      data =>{
        console.log(data);
        this.ville = data;
      }
    )
  }

  saveVille(){
    this.errors = [];
    if (this.ville['nom'].length < 3 || this.ville['nom'].trim()==""){
      this.errors.push("Nom trop court");
    }else{
      this.villeService.updateVille(this.id, this.ville).subscribe(
        data => {
          console.log(data);
        }
      )
      this.router.navigate(['ville']);
      this.alertService.alert('Ville Modifiée !', 'success');
    }
  }
}
