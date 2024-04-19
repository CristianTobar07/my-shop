import { Component, OnInit } from '@angular/core';
import { HeaderAdminComponent } from '../header-admin/header-admin.component';

@Component({
  selector: 'app-main-page-admin',
  templateUrl: './main-page-admin.component.html',
  styleUrls: ['./main-page-admin.component.css'],
  standalone: true,
  imports: [HeaderAdminComponent],
})
export class MainPageAdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
