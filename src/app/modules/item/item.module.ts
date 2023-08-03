import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTableComponent } from './components/item-table/item-table.component';

@NgModule({
  declarations: [ItemTableComponent],
  imports: [CommonModule],
  exports: [ItemTableComponent],
})
export class ItemModule {}
