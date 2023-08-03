import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTableComponent } from './components/item-table/item-table.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryModule } from '../category/category.module';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ItemTableComponent, CreateItemComponent, UpdateItemComponent],
  imports: [
    CommonModule,
    MaterialUiModule,
    ReactiveFormsModule,
    CategoryModule,
    RouterModule,
  ],
  exports: [ItemTableComponent],
})
export class ItemModule {}
