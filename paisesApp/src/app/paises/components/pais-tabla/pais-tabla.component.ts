import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [`
    .flag{max-width: 60px}
  `]
})

export class PaisTablaComponent {
  @Input() paises:Country[] = [];

}