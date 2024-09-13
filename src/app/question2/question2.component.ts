import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component {
  title = 'NgStyle Directive Demo';
  textColor = 'black';
  backgroundColor = 'white';
  fontSize = '16px';

  changeTextColor(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.value) {
      this.textColor = input.value;
    }
  }

  changeBackgroundColor(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.value) {
      this.backgroundColor = input.value;
    }
  }

  changeFontSize(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input && input.value) {
      this.fontSize = input.value + 'px';
    }
  }
}
