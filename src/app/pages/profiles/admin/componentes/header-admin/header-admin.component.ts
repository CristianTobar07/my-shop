import { Component, OnInit } from '@angular/core';
import { FormSearchProductsComponent } from 'pages/profiles/shared/form-search-products/form-search-productos.component';
import { TitlesComponent } from 'shared/components/titles/titles.component';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css'],
  standalone: true,
  imports: [TitlesComponent, FormSearchProductsComponent],
})
export class HeaderAdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
