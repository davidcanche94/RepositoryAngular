import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService{

    private heroes: Heroe[] = [
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          gif: 'assets/img/aquamanGif.gif',
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          gif: "assets/img/batmanGif.gif",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          gif: "assets/img/daredevilGif.gif",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          gif: "assets/img/hulkGif.gif",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          gif: "assets/img/linternaGif.gif",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          gif: "assets/img/spidermanGif.gif",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          gif: "assets/img/wolverineGif.gif",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];

    constructor(){
    }

    getHeroes(){
        return this.heroes;
    }

    getHeroe(item:number):Heroe {
        return this.heroes[item];
    }

    buscarHeroe(nombreHeroe:string){
      let heroesArr : Heroe[]  = [];

      nombreHeroe = nombreHeroe.toLowerCase().replace("-","");
      //console.log('Nombre heroe recibido ' +nombreHeroe);
      let index : number ;
      if(nombreHeroe){
        for(let h of this.heroes){
          let nombreFormat = h.nombre.toLowerCase().replace("-","");
          //console.log('Nombre con formato ' +nombreFormat);
          if(nombreFormat.includes(nombreHeroe) && nombreFormat != "" ){
            //heroesArr.push(h);
            index = this.heroes.indexOf(h);
          }
        }
      }

      //return heroesArr[];
      return index;
    }

}

export interface Heroe{
    nombre:     string;
    bio:        string;
    img:        string;
    gif:        string;
    aparicion:  string;
    casa:       string;
}