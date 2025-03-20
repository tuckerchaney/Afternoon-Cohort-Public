import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fav-colors',
  imports: [FormsModule],
  templateUrl: './fav-colors.component.html',
  styleUrl: './fav-colors.component.css',
})
export class FavColorsComponent {
  colorInput = '';
  color = signal<string | undefined>(undefined);
  colors = signal([{ name: 'red' }, { name: 'blue' }, { name: 'yellow' }]);
  addColor() {
    this.colors.update((colorList) => {
      const newColor = { name: this.colorInput };
      let newColorList = [...colorList, newColor];
      return newColorList;
    });
  }
  deleteColor() {
    this.colors.update((colorList) => {
      colorList.pop();
      return colorList;
    });
  }
}
