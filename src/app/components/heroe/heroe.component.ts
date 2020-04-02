import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd  } from '@angular/router';
import { HeroesService , Heroe } from '../../Services/heroes.service';
 
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  showAlert : Boolean = false;

  heroe:Heroe;

  busqueda:String;

  constructor(private _activatedRoute :ActivatedRoute,
              private _heroesService : HeroesService ) { 
    this._activatedRoute.params.subscribe(params => { 
      console.log(params['id']);
      if(params['id'] >= 0){
        this.heroe = this._heroesService.getHeroe(params['id']);
        console.log(this.heroe);
      }else{
        //console.log('Pss no me llego nada carnal');
        this.heroe = null;
        this.showAlert = true;
        this.busqueda = params['id'];
      }

    })
  }

  ngOnInit() {
    console.log('init de heroe componente');
  }

}
