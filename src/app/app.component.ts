import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { State } from './model/simple-state.model';
import { Post } from './model/post.model';
import { PostState } from './model/post-state.model';
import * as PostActions from './action/post.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message$: Observable<string>;

  post$: Observable<Post>;
  text: string;

  constructor(private storeSimple: Store<State>,
              private store: Store<PostState>) {
  }

  ngOnInit(): void {
    this.message$ = this.storeSimple.select('message');
    this.post$ = this.store.select('post');
  }

  spanishMessage() {
    this.storeSimple.dispatch({type: 'SPANISH'});
  }

  frenchMessage() {
    this.storeSimple.dispatch({type: 'FRENCH'});
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }
}
