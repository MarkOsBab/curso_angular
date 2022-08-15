import { Injectable } from "@angular/core";
import { Personajes } from '../interfaces/dbz.interface';

@Injectable()
export class dbzService{
    private _personajes: Personajes[] = [
        {
          nombre: 'Goku',
          poder: 15000,
        },
        {
          nombre: 'Vegeta',
          poder: 7500,
        }
    ];

    get personajes():Personajes[]{
        return [...this._personajes];
    }



    constructor(){}

    addPersonaje(data:Personajes){
        this._personajes.push(data);
    }
}