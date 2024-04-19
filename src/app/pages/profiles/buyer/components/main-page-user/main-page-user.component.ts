import { Component, OnInit } from '@angular/core';
import { HeaderUserComponent } from '../header-user/header-user.component';

@Component({
  selector: 'app-main-page-user',
  templateUrl: './main-page-user.component.html',
  styleUrls: ['./main-page-user.component.css'],
  standalone: true,
  imports: [HeaderUserComponent],
})
export class MainPageUserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
