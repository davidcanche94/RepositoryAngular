import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService,Heroe } from '../../../Services/heroes.service';
import { stringify } from 'querystring';
import { HeroeComponent } from '../../heroe/heroe.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public showResults = false;

  constructor(private _Router : Router,
              private _heroesService: HeroesService
  ) { 

  }

  ngOnInit() {
  }

  buscarHeroe(idx:string){
    if(idx != null && idx != ''){
      let heroeObtenido:number;
      heroeObtenido = this._heroesService.buscarHeroe(idx);
      console.log(heroeObtenido);
      if(heroeObtenido >= 0){
        this._Router.navigate(['/heroe',heroeObtenido]);
      }else{
        this._Router.navigate(['/heroe',idx]);
      }
    }else
      this._Router.navigate(['/heroes']);

  }

}
