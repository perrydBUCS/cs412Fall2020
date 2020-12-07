import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-a',
  template: '<h3>Parent A</h3>' +
    '<button (click)="incrementCounter()">Increment Count</button>' +
    '<app-child-a [counter]="counter"></app-child-a>',
  styleUrls: ['./parent-a.component.css']
})
export class ParentAComponent implements OnInit {

  counter: number = 0;

  incrementCounter(): void {
    this.counter++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
