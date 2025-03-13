import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'welcome to angular';
  description = 'quick intro to angular';
  inputText: string = '';
  showMessage = false;

  toggleMessage() {
    console.log('asdasd');
    this.showMessage = !this.showMessage;
  }

  toggleHeaderTitle() {
    this.title = 'This is the new title';
  }
}
