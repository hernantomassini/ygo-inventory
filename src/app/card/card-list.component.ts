import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: 'card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit {
  @Input() cards: any[]

  @Output() onAccept = new EventEmitter<void>()
  @Output() onCancel = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {}

  aceptarLista() {
    this.onAccept.emit()
  }

  cancelarLista() {
    this.onCancel.emit()
  }
}
