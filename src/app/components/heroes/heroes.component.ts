import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../Services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe [] = [];

  constructor( private _heroesServices:HeroesService,
               private _router:Router ) {

  }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

  verHeroeDetalle(id:string){
    //console.log('Se pide el heroe #' +id);
    this._router.navigate( ['/heroe',id] );

  }

}
