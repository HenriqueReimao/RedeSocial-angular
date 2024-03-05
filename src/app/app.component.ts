import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {PostComponent} from './components/post/post.component';
import {ListaSugestivaComponent} from './components/lista-sugestiva/lista-sugestiva.component';
import{MenuLateralComponent} from './components/menu-lateral/menu-lateral.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PostComponent, ListaSugestivaComponent, MenuLateralComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rede-Social';
}
