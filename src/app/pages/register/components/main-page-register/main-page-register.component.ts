import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../home/components/navbar/navbar.component';
import { TitlesComponent } from '../../../../shared/components/titles/titles.component';
import { FormRegisterComponent } from '../form-register/form-register.component';

@Component({
  selector: 'app-login',
  templateUrl: './main-page-register.component.html',
  styleUrls: [],
  standalone: true,
  imports: [NavbarComponent, TitlesComponent, FormRegisterComponent],
})
export class MainPageRegisterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
