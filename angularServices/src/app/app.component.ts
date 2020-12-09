import { Component } from '@angular/core';
import {from, Observable, Subscription, timer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularServices';
  currentTimerValue: number;
  currentTimerError: any;
  private Timer: Observable<number>;
  private timerObserver: Subscription;
  private Numbers: Observable<number>;

  startTimer(): void {
    const timerOptions = {
      next: value => {
        console.log(`Current timer: ${value}`);
        this.currentTimerValue = value;
      },
      error: err => {
        console.table(`Error: ${err}`);
        this.currentTimerError = err;
      },
      complete: () => {
        console.log(`Completed`);
      }
    };
    console.log(`Starting timer`);
    this.timerObserver = this.Timer.subscribe(timerOptions);
  }
  constructor() {
    this.Timer = timer(1000, 2000);
    this.Numbers = from([1,2,5,6,2,8,9]);
  }
}
