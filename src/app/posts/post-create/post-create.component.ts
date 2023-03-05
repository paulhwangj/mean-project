import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

// attach the @Component() to a class that
// marks it as a component that angular uses
@Component({
    selector: 'app-post-create',// ESSENTIALLY A CUSTOM HTML ELEMENT
    templateUrl: './post-create.component.html', // pointing to the proper .html file
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  // posts service is now injected here
  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    // we are capable of doing this
    // due to the parameter being a form
    if (form.invalid) {
      return;
    }
    // creation of new post will signal a listener to do some action
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
