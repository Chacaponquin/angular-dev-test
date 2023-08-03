import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Category } from 'src/app/modules/category/model';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css'],
})
export class CreateItemComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    private readonly service: ItemService,
    private readonly router: Router
  ) {}

  categories: Array<Category> = [];

  itemForm = this.fb.group({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    cost: new FormControl(0),
    categoryId: new FormControl(''),
  });

  loading = false;

  ngOnInit(): void {
    this.service.getCategories().subscribe((categories) => {
      this.categories = categories;

      if (categories.length) {
        this.itemForm.controls['categoryId'].setValue(categories[0].id);
      }
    });
  }

  createItem(): void {
    if (this.itemForm.valid) {
      this.loading = true;

      this.service.createItem(this.itemForm.value).subscribe(() => {
        this.loading = false;

        this.router.navigate([ROUTES.ITEMS_LIST]);
      });
    }
  }
}
