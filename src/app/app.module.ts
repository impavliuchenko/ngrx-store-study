import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './reduce/simple.reducer';
import { postReducer } from './reduce/post.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      message: simpleReducer,
      post: postReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
