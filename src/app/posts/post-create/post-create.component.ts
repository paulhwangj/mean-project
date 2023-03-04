import { Component } from '@angular/core';

// attach the @Component() to a class that
// marks it as a component that angular uses
@Component({
    selector: 'app-post-create',// ESSENTIALLY A CUSTOM HTML ELEMENT
    templateUrl: './post-create.component.html' // pointing to the proper .html file
})
export class PostCreateComponent {
  // handles a post when "Save Post" is clicked
  onAddPost() {
    alert('Post added!');
  }

}
