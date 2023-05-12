import { Component } from '@angular/core';
import { ShopService } from './services/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rm';

  constructor(shopService: ShopService) {}
  getAll() {}
}
