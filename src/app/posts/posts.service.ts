import { Injectable } from '@angular/core';
// essentially the event emitter
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({ providedIn: 'root'} )
export class PostsService {
  private posts: Post[] = [];
  // Subject / Observable
  private postsUpdated = new Subject<Post[]>();

  // setter for posts
  getPosts() {
    return [...this.posts];
  }

  // Subject / Observable
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  // adding a new post
  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post); // adds the posts variable

    // once we have updated by adding a new post to posts,
    // we want that change reflected in the UI and this will do that
    // the subject/observable is emitting data here!
    this.postsUpdated.next([...this.posts]);
  }
}
