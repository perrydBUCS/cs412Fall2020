import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-c',
  template: '<h3>Parent C</h3>' +
    '<button (click)="incrementCounter()">Increment Count</button>' +
    '<app-child-c [counter]="counter"></app-child-c>',
  styleUrls: ['./parent-c.component.css']
})
export class ParentCComponent implements OnInit {

  counter: number = 0;

  incrementCounter(): void {
    this.counter++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
