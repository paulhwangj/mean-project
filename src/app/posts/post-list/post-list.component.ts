import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  @Input() posts: Post[] = [];
  private postsSub: Subscription;

  // posts service is now injected here
  constructor(public postsService: PostsService) {}

  // angular automatically calls for us
  // does basic intialization tasks
  ngOnInit(): void {
    // fetches the intiail list of posts
    this.posts = this.postsService.getPosts();

    // Observer for the subject/observable
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  // angular automatically calls for us
  // called when component is about to get removed
  ngOnDestroy(): void {
    // removes the subscription when component is removed
    // to prevent memory leak
    this.postsSub.unsubscribe();
  }
}
