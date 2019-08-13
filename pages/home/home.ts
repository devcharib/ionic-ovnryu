import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  numero1: number;
  numero2: number;
  resultado : number;
  constructor(){}
  Soma(){
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }

  

}
