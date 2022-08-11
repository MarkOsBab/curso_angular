import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  deletedHeros:string = '';
  
  borrarHeroe(){
    this.deletedHeros = this.heroes.shift() || '';
  }
}
