import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormSearchProductsComponent } from 'pages/profiles/shared/form-search-products/form-search-productos.component';
import { TitlesComponent } from 'shared/components/titles/titles.component';
import { ROUTES } from 'shared/constants';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css'],
  standalone: true,
  imports: [IonicModule, TitlesComponent, FormSearchProductsComponent],
})
export class HeaderUserComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  handleLogout() {
    this.router.navigate([ROUTES.HOME]);
  }
}
