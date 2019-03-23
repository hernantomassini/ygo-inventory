import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-filters',
  templateUrl: 'card-filters.component.html',
  styleUrls: ['./card-filters.component.css']
})

export class CardFiltersComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

  buttonAccent() {
    console.log('accent clicked')
  }

  buttonPrimary() {
    console.log('primary clicked')
  }

  buttonWarn() {
    console.log('warn clicked')
  }
}
