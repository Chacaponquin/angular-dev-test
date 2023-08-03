import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CategoryTableComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialUiModule, RouterModule],
  exports: [],
})
export class CategoryModule {}
