import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.action';

@Component({
  selector: 'app-counter-controller',
  templateUrl: './counter-controller.component.html',
  styleUrls: ['./counter-controller.component.scss']
})
export class CounterControllerComponent implements OnInit {

  constructor(
    private store : Store
  ) { }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment({value: 1}));
  }

  decrement() {
    this.store.dispatch(decrement({value: 2}));
  }
}
