import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TemplateFormValidationComponent } from "./template-form-validation/template-form-validation.component";


@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, RouterLink, TemplateFormValidationComponent]
})


export class AppComponent {
  cvForm: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }


  //Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;
  }
  posts: any;


}
