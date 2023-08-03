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
  displayedColumns = ['Name', 'Category', 'Description', 'Options'];

  deleteLoading = false;

  constructor(private readonly service: ItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.service.getItems().subscribe((items) => {
      this.items = items;
    });
  }

  deleteItem(itemID: string): void {
    this.deleteLoading = true;

    this.service.deleteItem(itemID).subscribe(() => {
      this.deleteLoading = false;
      this.getItems();
    });
  }
}
