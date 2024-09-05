import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterControllerComponent } from './counter-controller/counter-controller.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';

import { counterEffect } from './store/counter.effect';

@NgModule({
  declarations: [
    AppComponent,
    CounterControllerComponent,
    CounterOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer
    }, {}),
    EffectsModule.forRoot([counterEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
