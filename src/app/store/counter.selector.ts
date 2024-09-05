import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCounterState = createFeatureSelector<number>('counter');
export const counterSelector = createSelector(
    selectCounterState,
    (state: number) => state
)
