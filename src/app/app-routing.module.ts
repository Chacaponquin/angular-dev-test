import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemTableComponent } from './modules/item/components/item-table/item-table.component';
import { CreateItemComponent } from './modules/item/components/create-item/create-item.component';
import { CategoryTableComponent } from './modules/category/components/category-table/category-table.component';
import { CreateCategoryComponent } from './modules/category/components/create-category/create-category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full',
  },
  {
    path: 'items',
    component: ItemTableComponent,
  },
  { path: 'create-item', component: CreateItemComponent },
  { path: 'categories', component: CategoryTableComponent },
  { path: 'create_category', component: CreateCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
