import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loggedIn: boolean | undefined;


  public loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(
  ) {

  }
  ngOnInit(): void {
    this.loggedIn = false
  }
  title = 'auth-app';
  public onSubmit() {

    //username === "test@test.com" && password === "test"
    if (this.loginForm.value.username === "test@test.com" && this.loginForm.value.password === "test") {
      this.loggedIn = true;
    }
  }
}

