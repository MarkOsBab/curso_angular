import { Component } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor(private GifsService:GifsService){}

  historial(){
    return this.GifsService.historial;
  }
  buscar(arg:string){
    this.GifsService.buscarGifs(arg);    
  }
}
