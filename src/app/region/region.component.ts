import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegionService} from '../service/region/region.service';
import {VilleService} from '../service/ville/ville.service';
import {Ville} from '../list-villes/list-villes.component';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {



  constructor(private router:Router,
              private regionService:RegionService,
              private villeService:VilleService) { }

  ngOnInit() {

  }




}
