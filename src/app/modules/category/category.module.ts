import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from '../material-ui/material-ui.module';

@NgModule({
  declarations: [CategoryTableComponent, CreateCategoryComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialUiModule],
})
export class CategoryModule {}
