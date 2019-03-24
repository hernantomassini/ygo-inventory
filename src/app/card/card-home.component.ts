import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: 'card-home.component.html',
  styleUrls: ['./card-home.component.css']
})

export class CardHomeComponent implements OnInit {

  cards: any = [
    { name: 'Dark magician', atk: 2500, def: 2100, lvl: 8},
    { name: 'Blue-Eyes White Dragon', atk: 3000, def: 2500, lvl: 8},
    { name: 'Red Eyes Black Dragon', atk: 2400, def: 2000, lvl: 7},
    { name: 'Sangan', atk: 1000, def: 600, lvl: 3},
  ]

  constructor() { }
  ngOnInit() { }

  seAceptoEnCardList() {
    console.log('aceptado')
  }

  seCanceloEnCardList() {
    console.log('cancelado')
  }
}
