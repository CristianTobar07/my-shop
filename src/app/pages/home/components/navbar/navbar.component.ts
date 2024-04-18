import { Component, OnInit, Renderer2 } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [IonicModule],
})
export class NavbarComponent implements OnInit {
  menuVisible = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  mostrarOcultarMenu() {
    if (this.menuVisible) {
      this.renderer.removeClass(document.getElementById('nav'), 'responsive');
      this.menuVisible = false;
    } else {
      this.renderer.addClass(document.getElementById('nav'), 'responsive');
      this.menuVisible = true;
    }
  }
}
