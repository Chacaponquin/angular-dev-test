import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { CreateItemComponent } from './components/create-item/create-item.component';

@NgModule({
  declarations: [ItemTableComponent, CreateItemComponent],
  imports: [CommonModule],
  exports: [ItemTableComponent],
})
export class ItemModule {}
