import { Component, OnInit } from '@angular/core';
import { TitlesComponent } from '../../../../shared/components/titles/titles.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  standalone: true,
  imports: [TitlesComponent],
})
export class BodyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
