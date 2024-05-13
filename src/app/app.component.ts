import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CensusDisplayComponent } from './components/census-display/census-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CensusDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'census-app';
}
