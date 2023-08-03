import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../model';

@Component({
  selector: 'item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css'],
})
export class ItemTableComponent implements OnInit {
  items: Array<Item> = [];

  constructor(private readonly service: ItemService) {}

  ngOnInit(): void {
    this.service.getItems().subscribe((items) => {
      this.items = items;
    });
  }
}
