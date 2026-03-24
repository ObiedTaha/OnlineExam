import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideAuth } from "./feature/shared/components/side-auth/side-auth";
import { Login } from "./feature/auth/login/login";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideAuth, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Online-Tasks');
}
