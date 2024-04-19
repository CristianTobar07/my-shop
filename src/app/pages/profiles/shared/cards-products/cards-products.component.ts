import { DecimalPipe, NgIf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'pages/login/models';

@Component({
  selector: 'app-cards-products',
  templateUrl: './cards-products.component.html',
  styleUrls: ['./cards-products.component.css'],
  standalone: true,
  imports: [NgIf, DecimalPipe],
})
export class CardsProductsComponent implements OnInit {
  @Input() product?: Product = undefined;

  constructor() {}

  ngOnInit() {}
}
