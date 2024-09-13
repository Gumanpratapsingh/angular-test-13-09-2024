import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Question2Component } from "./question2/question2.component";
import { Question3Component } from "./question3/question3.component";
import { question1 } from './question1/question1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, question1, Question2Component, Question3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-guman-pratap-singh';
}
