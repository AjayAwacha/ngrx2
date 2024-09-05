import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { decrement, increment } from "./counter.action";
import { map } from "rxjs";


@Injectable()
export class counterEffect {
    constructor(
        private action$: Actions
    ) { }

    counterEffect = createEffect(() => {
        return this.action$.pipe(
            ofType(increment, decrement),
            map((data) => {
                console.log('data Emited ', data);
                localStorage.setItem('counter', JSON.stringify(data.value));
            })
        )
    }, { dispatch: false }
    )
}
