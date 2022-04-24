import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import productsEffects from './effects/products.effect';
import { productReducer } from './reducer/products.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([productsEffects]),
    StoreModule.forRoot({"products":productReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
