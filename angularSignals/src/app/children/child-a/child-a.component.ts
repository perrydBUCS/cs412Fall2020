import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-a',
  template: '<h3>Child A</h3>' +
    '<br/>Value of counter is: {{counter}}',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
  @Input() counter: number;
  constructor() { }

  ngOnInit(): void {
  }

}
