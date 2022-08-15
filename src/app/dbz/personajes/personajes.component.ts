import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent{
  //@Input() personajes: Personajes[] = [];
  get personajes(){
    return this.dbzService.personajes;
  }
  constructor(private dbzService:dbzService){

  }
}
