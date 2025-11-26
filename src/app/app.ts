import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { RoomList} from './room-list/room-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, RoomList], 
  template: `
    <app-header></app-header>
    <main class="container py-4">
      <app-room-list></app-room-list>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.css']
})
export class App {}
