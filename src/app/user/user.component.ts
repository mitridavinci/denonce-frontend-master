import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuartierService} from '../service/quartier/quartier.service';
import {AdminService} from '../service/admin/admin.service';
import {AuthenticationService} from '../service/authentication.service';
import {CouvertureService} from '../service/couverture/couverture.service';
import {AlertService} from '../service/alert/alert.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  admin: Object = {"id":0,"nom":"", "email":"", "tel":"", "role":{}};
  id: number;
  private couvertures: any;

  constructor(private route:ActivatedRoute,
              private adminService:AdminService,
              private router:Router,
              private auth:AuthenticationService,
              private couvertureService:CouvertureService,
              private alertService:AlertService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getAdmin(this.id);
    this.getCouverture();
  }

  getAdmin(id){
    this.adminService.getOneUser(id).subscribe(
      data =>{
        console.log(data);
        this.admin = data;
      }
    )
  }

  saveUser(){
    console.log(this.admin['nom'], this.admin['role'].id);
    this.couvertureService.updateRole(this.admin['nom'], this.admin['role'].id).subscribe(
      data => {
        console.log(data);
      }
    )
    this.router.navigateByUrl("/user");
    this.alertService.alert('Role modifié !', 'success');
  }

  getCouverture(){
    this.auth.getCouverture().subscribe(
      data => {
        console.log(data);
        this.couvertures = data;
      }
    )
  }

}
