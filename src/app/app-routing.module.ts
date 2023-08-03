import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemTableComponent } from './modules/item/components/item-table/item-table.component';
import { CreateItemComponent } from './modules/item/components/create-item/create-item.component';
import { CategoryTableComponent } from './modules/category/components/category-table/category-table.component';
import { CreateCategoryComponent } from './modules/category/components/create-category/create-category.component';
import { ROUTES } from './constants/routes';
import { UpdateCategoryComponent } from './modules/category/components/update-category/update-category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full',
  },
  {
    path: ROUTES.ITEMS_LIST,
    component: ItemTableComponent,
  },
  { path: ROUTES.CREATE_ITEM, component: CreateItemComponent },
  { path: ROUTES.CATEGORIES_LIST, component: CategoryTableComponent },
  { path: ROUTES.CREATE_CATEGORY, component: CreateCategoryComponent },
  { path: ROUTES.UPDATE_CATEGORY, component: UpdateCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
