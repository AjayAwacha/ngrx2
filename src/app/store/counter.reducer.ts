import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.action";

const initialValue: number = 0;

export const counterReducer = createReducer(
    initialValue,
    on(increment, (state: number, action: {value: number}) => {
        return state + action.value;
    }),
    on(decrement, (state: number, action: {value: number}) => {
        return state - action.value;
    })
)
