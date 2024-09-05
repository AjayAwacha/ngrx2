import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { counterSelector } from '../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {

  counter$ !: Observable<number>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.counter$ = this.store.select<number>(counterSelector);
  }

}
