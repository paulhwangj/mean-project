import { Component } from '@angular/core';

// attach the @Component() to a class that
// marks it as a component that angular uses
@Component({
    selector: 'app-post-create',// ESSENTIALLY A CUSTOM HTML ELEMENT
    templateUrl: './post-create.component.html' // pointing to the proper .html file
})
export class PostCreateComponent {
  newPost= 'nothing';  // this is a property of the class
  enteredValue = '';

  onAddPost() {
    this.newPost = this.enteredValue;
  }

}
