// import { Authlib } from '../../../../../dist/auth';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule, RouterOutlet],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  // _authlib = inject(Authlib);
  
}
