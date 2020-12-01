import { Component, OnInit } from '@angular/core';
import { people } from '../data/peopleMOCK';
import {Person} from '../data/Person';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  people: Person[] = people;
  person: Person;
  selectedPerson: Person;
  fubar: any;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedPerson(person: Person): void {
    this.selectedPerson = person;
    console.log(`${person.firstName}`);
  }
}
