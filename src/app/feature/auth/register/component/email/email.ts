import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-email',
  imports: [RouterLink, ReactiveFormsModule,NgIf],
  templateUrl: './email.html',
  styleUrl: './email.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Email {
  private _router = inject(Router);
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  isInvalid(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    return !!(control && control.invalid && control.touched);
  }

  sendOpt() {
    if (this.registerForm.valid) {
      console.log('email', this.registerForm.value.email);
      this._router.navigate(['/auth/signUp/verify']);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
