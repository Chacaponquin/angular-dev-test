import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ItemService } from '../../services/item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes';
import { Item } from '../../model';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
})
export class UpdateItemComponent implements OnInit {
  constructor(
    private readonly fb: FormBuilder,
    private readonly service: ItemService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  item: Item | null = null;

  itemForm = this.fb.group({
    name: new FormControl(''),
    description: new FormControl(''),
    defaultPrice: new FormControl(0),
    defaultCost: new FormControl(0),
  });

  loading = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const categoryID = params['id'];

      this.service.findItem(categoryID).subscribe((item) => {
        this.item = item;

        if (this.item) {
          this.itemForm.controls['name'].setValue(this.item.name);
          this.itemForm.controls['description'].setValue(this.item.description);
          this.itemForm.controls['defaultPrice'].setValue(0);
          this.itemForm.controls['defaultCost'].setValue(0);
        }
      });
    });
  }

  updateItem(): void {
    if (this.itemForm.valid && this.item) {
      this.loading = true;

      this.service
        .updateItem(this.item.id, {
          ...this.itemForm.value,
          code: this.item.code,
        })
        .subscribe(() => {
          this.loading = false;

          this.router.navigate([ROUTES.ITEMS_LIST]);
        });
    }
  }
}
