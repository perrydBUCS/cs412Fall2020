import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-b',
  template: '<h3>Child B</h3>' +
    '<br/>Value of counter is: {{counter}}',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {
private _counter: number = 0;
  // use set/get to manage the counter value
  @Input()
  set counter(counter: number) {
    this._counter +=100;
  }
  get counter(): number {
    return this._counter;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
