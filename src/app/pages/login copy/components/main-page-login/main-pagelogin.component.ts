import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../home/components/navbar/navbar.component';
import { TitlesComponent } from '../../../../shared/components/titles/titles.component';
import { FormLoginComponent } from '../form-login/form-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './main-pagelogin.component.html',
  styleUrls: ['./main-pagelogin.component.css'],
  standalone: true,
  imports: [NavbarComponent, TitlesComponent, FormLoginComponent],
})
export class MainPageLoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
