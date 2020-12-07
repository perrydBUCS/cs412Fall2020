import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-b',
  template: '<h3>Parent B</h3>' +
    '<button (click)="incrementCounter()">Increment Count</button>' +
    '<app-child-b [counter]="counter"></app-child-b>',
  styleUrls: ['./parent-b.component.css']
})
export class ParentBComponent implements OnInit {

  counter: number = 0;

  incrementCounter(): void {
    this.counter++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
