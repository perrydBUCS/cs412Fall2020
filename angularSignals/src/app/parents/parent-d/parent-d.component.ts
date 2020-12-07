import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-d',
  template: '<h3>Parent D</h3>' +
    '<button (click)="incrementCounter()">Increment Count</button>' +
    '<app-child-d [counter]="counter" (voted)="incrementCounter()"></app-child-d>',
  styleUrls: ['./parent-d.component.css']
})
export class ParentDComponent implements OnInit {

  counter: number = 0;

  incrementCounter(): void {
    this.counter++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
