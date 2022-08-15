import { Component } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.services';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  nuevo: Personajes = {
    nombre: 'ASd',
    poder: 10
  };

  constructor(){
    
  }
  
}
