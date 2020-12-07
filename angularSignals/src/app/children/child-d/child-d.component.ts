import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-d',
  template: '<h3>Child D</h3>' +
    '<button (click)="vote()">Vote in child</button>' +
    '<br/>Vote count in child: {{counter}}',
  styleUrls: ['./child-d.component.css']
})
export class ChildDComponent implements OnInit {

  @Output() voted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() counter: number = 0;

  vote(){
    this.voted.emit(true);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
