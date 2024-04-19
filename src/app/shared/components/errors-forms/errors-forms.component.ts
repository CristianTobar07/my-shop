import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// import 'animate.css';

@Component({
  selector: 'app-errors-forms',
  templateUrl: './errors-forms.component.html',
  styleUrls: ['./errors-forms.component.css'],
  standalone: true,
  imports: [IonicModule],
})
export class ErrorsFormsComponent {
  @Input() message: string = '';

  constructor() {}
}
