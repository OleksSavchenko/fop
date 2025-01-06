import { Component } from '@angular/core';
import { MatListModule, MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

}
