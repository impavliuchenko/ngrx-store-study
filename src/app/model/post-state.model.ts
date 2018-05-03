import { Observable } from 'rxjs/Observable';
import { Post } from './post.model';

export interface PostState {
  post: Observable<Post>;
}
