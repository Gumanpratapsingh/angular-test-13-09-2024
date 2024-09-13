import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css'], 
})
export class question1 {
  isHome: boolean = false;
  isService: boolean = false;
  isContact: boolean = false;

  onClickContact() {
    this.isContact = true;
    this.isService = false;
    this.isHome = false;
  }

  onClickHome() {
    this.isContact = false;
    this.isService = false;
    this.isHome = true;
  }

  onClickService() {
    this.isContact = false;
    this.isService = true;
    this.isHome = false;
  }
}
