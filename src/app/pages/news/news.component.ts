import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Watches } from 'src/app/models/Watches';

import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  watches: Watches[] = [];

  constructor(private shopService: ShopService) {}

  getWatches(): void {
    this.shopService.getWatches().subscribe((data) => (this.watches = data));
  }

  ngOnInit(): void {
    this.getWatches();
  }
}
