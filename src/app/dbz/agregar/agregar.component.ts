import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personajes = {
    nombre: '',
    poder: 0,
  };
  constructor(private dbzService: dbzService){}
  //@Output() onNewPersonaje: EventEmitter<Personajes> = new EventEmitter();
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return;}
    //this.onNewPersonaje.emit(this.nuevo);
    this.dbzService.addPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}