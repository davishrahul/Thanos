import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeredUser
  constructor() { }

  ngOnInit() {
    this.registeredUser=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
      password:new FormControl(''),
      confirmPassword:new FormControl('')
    })
  }

}
