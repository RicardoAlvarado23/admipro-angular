import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('progeso') txtProgreso: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cambiarValor( valor: number) {
    this.progreso += valor;
    if (this.progreso > 100) {
      this.progreso = 100;
    } else if (this.progreso < 0 ) {
      this.progreso = 0;
    }
    this.cambioValor.emit(this.progreso);
    this.txtProgreso.nativeElement.focus();
  }

  onChange(newValue: number) {

    // const elementHTML: any = document.getElementsByName('progreso')[0];

    if (!newValue) {
      newValue = 0;
    }
    if (newValue > 100) {
      this.progreso = 100;
    } else if (newValue < 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtProgreso.nativeElement.value = Number(this.progreso);

    this.cambioValor.emit(this.progreso);
  }
}
