import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mdf';

  loginForm = new FormGroup({
    userName: new FormControl(),
    passWord: new FormControl()
  })

  onSubmit() {
    console.log("Called.........");
    console.log(this.loginForm.value);
  }
}
