import { Component, EventEmitter, Output } from '@angular/core';

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
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }

    // creation of new post will signal a listener to do some action
    this.postCreated.emit(post);
  }
}
