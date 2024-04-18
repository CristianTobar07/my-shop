import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-main-page-home',
  templateUrl: './main-page-home.component.html',
  styleUrls: ['./main-page-home.component.css'],
  standalone: true,
  imports: [NavbarComponent, BodyComponent],
})
export class MainPageHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
