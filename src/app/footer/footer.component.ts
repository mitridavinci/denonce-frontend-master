import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: any;

  constructor() { }

  ngOnInit() {
    this.year = new Date().getFullYear();
    console.log(this.year)
  }

}
