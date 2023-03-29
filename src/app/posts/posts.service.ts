import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // essentially the event emitter
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';

@Injectable({ providedIn: 'root'} )
export class PostsService {
  private posts: Post[] = [];
  // Subject / Observable
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  // setter for posts
  getPosts() {
    // expects a path to our backend/server
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        // function that handles the response from the get request above
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  // Subject / Observable
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  // adding a new post
  addPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    this.http.post<{message: string}>('http://localhost:3000/api/posts', post)
      .subscribe((responseData) => {
        console.log(responseData.message);

        // only push new post to the local data if it actually succeeds
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
}
