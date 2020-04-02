import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

// Cuando se importa output, se tiene que importar el EventEmitter es el evento con el que se podra mandar por medio del Output un cambio al componente padre

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // Decorador input indica a angular que este valor puede venir desde otro componente, pero igual se puede inicializar, es un opcional
  @Input() heroe : any = {};
  @Input() index : number ;
  // heroeSeleccionado sera el evento que siempre va a estar escuchando el padre para cualquier cambio, tiene que especificarse que tipo de dato es el EventEmitter
  @Output() heroeSeleccionado : EventEmitter<number> ;

  constructor(private _router : Router) { 
    // Se inicializa el evento
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroeDetalle(){
    // console.log(this.index);
    this._router.navigate(['/heroe',this.index]);
    //this.heroeSeleccionado.emit(this.index);
  }

}
