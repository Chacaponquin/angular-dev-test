import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryModule } from '../category/category.module';

@NgModule({
  declarations: [ItemTableComponent, CreateItemComponent],
  imports: [
    CommonModule,
    MaterialUiModule,
    ReactiveFormsModule,
    CategoryModule,
  ],
  exports: [ItemTableComponent],
})
export class ItemModule {}
