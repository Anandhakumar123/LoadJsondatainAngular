import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItems: {
    [key: string]: { description: string; name: string; price: number };
  } = {
    m1: {
      description: 'Chicken Fried Rice',
      name: 'FriedRice',
      price: 150.0,
    },
    m2: {
      description: 'Mutton Briyani',
      name: 'Briyani',
      price: 175.0,
    },
    m3: {
      description: 'Idly with Vada',
      name: 'Idly',
      price: 50.0,
    },
    m4: {
      description: 'Dosai with potato masala',
      name: 'Dosai',
      price: 55.0,
    },
  };

  get menuItemsArray() {
    return Object.keys(this.menuItems).map(
      (key: string) => this.menuItems[key]
    );
  }
}
